import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import chas from '../chas';

// Estilização dos componentes
const Container = styled.ScrollView`
  flex: 1;
  background-color: #f0f8f5;
  padding: 20px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #2e7d32;
  margin: 20px 0 10px;
`;

const CardContainer = styled.View`
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 30px;
  margin: 10px;
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

const CardDescription = styled.Text`
  font-size: 14px;
  color: #388e3c;
  text-align: center;
`;

const NoResultsText = styled.Text`
  font-size: 16px;
  color: #d32f2f;
  text-align: center;
  margin-top: 50px;
`;

// Componente de resultados de pesquisa
export default function SearchResults() {
  const router = useRouter();
  const { query } = useLocalSearchParams();

  const searchQuery = (Array.isArray(query) ? query[0] : query)?.toString().toLowerCase() || '';
  const filteredTeas = chas.filter(
    (tea) =>
      tea.nome.toLowerCase().includes(searchQuery) ||
      tea.sintomas?.some((sintoma) => sintoma.toLowerCase().includes(searchQuery))
  );

  return (
    <Container>
      <SectionTitle>Resultados da Pesquisa</SectionTitle>
      {filteredTeas.length > 0 ? (
        filteredTeas.map((tea) => (
          <CardContainer key={tea.id}>
            <CardImage source={tea.imagem} />
            <CardText>{tea.nome}</CardText>
            <CardDescription>{tea.propriedades}</CardDescription>
            <CardDescription>Preparo: {tea.preparação}</CardDescription>
            <CardDescription>Sintomas: {tea.sintomas}</CardDescription>
          </CardContainer>
        ))
      ) : (
        <NoResultsText>Nenhum resultado encontrado para "{searchQuery}".</NoResultsText>
      )}
    </Container>
  );
}
