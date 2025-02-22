import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import chas from '../chas';

// Estilização dos componentes
const Container = styled.View`
  flex: 1;
  background-color: #f0f8f5;
  padding: 20px;
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

const CardDescription = styled.Text`
  font-size: 16px;
  color: #388e3c;
  text-align: center;
`;

// Componente principal (Lista Completa)
export default function ListaChas() {
  return (
    <Container>
      <SectionTitle>Lista Completa de Chás</SectionTitle>
      <ScrollView showsVerticalScrollIndicator={false}>
        {chas.map((tea) => (
          <CardContainer key={tea.id}>
            <CardImage source={tea.imagem} />
            <CardText>{tea.nome}</CardText>
            <CardDescription>Propriedades: {tea.propriedades}</CardDescription>
            <CardDescription>Preparo: {tea.preparação}</CardDescription>
          </CardContainer>
        ))}
      </ScrollView>
    </Container>
  );
}
