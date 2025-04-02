import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import chas from '../../chas';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BottomNavigationHeight } from '../_layout'; // Importa a altura da barra inferior

// Estilização dos componentes
const Container = styled.View`
  flex: 1;
  background-color: #f0f8f5;
  padding: 20px;
  padding-bottom: ${() => BottomNavigationHeight}px;
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #2e7d32;
  text-align: center;
  margin-bottom: 20px;
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

const ScientificName = styled.Text`
  font-size: 16px;
  font-style: italic;
  color: #388e3c;
  text-align: center;
`;

const CardDescription = styled.Text`
  font-size: 16px;
  color: #388e3c;
  text-align: center;
`;

const WarningText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #d32f2f;
  text-align: center;
  margin-top: 5px;
`;

// Ordena a lista de chás em ordem alfabética
const chasOrdenados = [...chas].sort((a, b) => a.nome.localeCompare(b.nome));

// Componente principal (Lista Completa)
export default function ListaChas() {
  const navigation = useNavigation();

  // Define o título da barra de navegação
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Lista de Chás', // Título desejado
    });
  }, [navigation]);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionTitle>Lista Completa de Chás</SectionTitle>
        {chasOrdenados.map((tea) => (
          <CardContainer key={tea.id}>
            <CardImage source={tea.imagem} />
            <CardText>{tea.nome}</CardText>
            <ScientificName>{tea.nome_cientifico}</ScientificName>
            <CardDescription>Propriedades: {tea.propriedades}</CardDescription>
            <CardDescription>Preparo: {tea.preparacao}</CardDescription>
            <CardDescription>Sintomas: {tea.sintomas.join(", ")}</CardDescription>
            <WarningText>Contraindicações: {tea.contraIndicacoes}</WarningText>
          </CardContainer>
        ))}
      </ScrollView>
    </Container>
  );
}