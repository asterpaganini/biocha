import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import chas from '../../chas';
import { useNavigation } from 'expo-router';
import { BottomNavigationHeight } from '../_layout'; // Importa a altura da barra inferior

// Estilização dos componentes
const Container = styled.View`
  flex: 1;
  background-color: #f0f8f5;
  padding: 20px;
  padding-bottom: ${() => BottomNavigationHeight}px;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #2e7d32;
  border-radius: 8px;
  padding: 10px;
  background-color: white;
  margin-bottom: 20px;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  height: 40px;
  font-size: 16px;
  color: #333;
`;

const CardContainer = styled.View`
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 30px;
  margin-bottom: 15px;
  align-items: center;
`;

const CardImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const CardText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #1b5e20;
  text-align: center;
`;

const NoResultsText = styled.Text`
  font-size: 16px;
  color: #d32f2f;
  text-align: center;
  margin-top: 20px;
`;

const ScientificName = styled.Text`
  font-size: 14px;
  font-style: italic;
  color: #2e7d32;
  text-align: center;
  margin-bottom: 5px;
`;

const CardDescription = styled.Text`
  font-size: 14px;
  color: #388e3c;
  text-align: center;
  margin-bottom: 5px;
`;

const WarningText = styled.Text`
  font-size: 14px;
  color: #d32f2f;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
`;

export default function SearchScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Pesquisar" });
  }, [navigation]);

  const filteredTeas = chas.filter(
    (tea) =>
      tea.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tea.sintomas.some((sintoma) => sintoma.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          placeholder="Buscar por chá ou sintoma..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Ionicons name="search" size={24} color="#2e7d32" />
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredTeas.length > 0 ? (
          filteredTeas.map((tea) => (
            <CardContainer key={tea.id}>
              <CardImage source={tea.imagem} />
              <CardText>{tea.nome}</CardText>
              <ScientificName>{tea.nome_cientifico}</ScientificName>
              <CardDescription>Propriedades: {tea.propriedades}</CardDescription>
              <CardDescription>Preparo: {tea.preparacao}</CardDescription>
              <CardDescription>Sintomas: {tea.sintomas.join(", ")}</CardDescription>
              <WarningText>Contraindicações: {tea.contraIndicacoes}</WarningText>
            </CardContainer>
          ))
        ) : (
          <NoResultsText>Nenhum resultado encontrado.</NoResultsText>
        )}
      </ScrollView>
    </Container>
  );
}