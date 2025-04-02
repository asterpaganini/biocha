import React, { useEffect } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import chas from '../chas';
import { BottomNavigationHeight } from '../app/_layout';

// Estilização dos componentes
const Container = styled.View`
  flex: 1;
  background-color: #f0f8f5;
  padding: 20px;
  padding-bottom: ${() => BottomNavigationHeight}px;
`;

const ScrollContainer = styled.ScrollView`
  flex-grow: 1;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #2e7d32;
  margin: 20px 0 10px;
  text-align: center;
`;

const CardContainer = styled.View`
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 30px;
  margin: 10px;
  width: 90%;
  align-self: center;
  align-items: center;
`;

const CardImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const CardText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #1b5e20;
  text-align: center;
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

const NoResultsText = styled.Text`
  font-size: 16px;
  color: #d32f2f;
  text-align: center;
  margin-top: 50px;
`;

// Função para remover acentos
const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

// Componente de resultados de pesquisa
export default function SearchResults() {
  const { query } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Resultados da Pesquisa" });
  }, [navigation]);

  const searchQuery = (Array.isArray(query) ? query[0] : query)?.toString().toLowerCase() || '';
  const normalizedSearchQuery = removeAccents(searchQuery);

  const filteredTeas = chas.filter(
    (tea) => {
      const normalizedName = removeAccents(tea.nome.toLowerCase());
      const normalizedSymptoms = tea.sintomas?.map(s => removeAccents(s.toLowerCase()));

      return (
        normalizedName.includes(normalizedSearchQuery) ||
        normalizedSymptoms?.some(s => s.includes(normalizedSearchQuery))
      );
    }
  );

  return (
    <Container>
      <ScrollContainer showsVerticalScrollIndicator={false}>
        <SectionTitle>Resultados da Pesquisa</SectionTitle>
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
          <NoResultsText>Nenhum resultado encontrado para "{searchQuery}".</NoResultsText>
        )}
      </ScrollContainer>
    </Container>
  );
}