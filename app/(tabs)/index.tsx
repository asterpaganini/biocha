import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useRouter } from 'expo-router';
import { Search } from 'lucide-react-native';
import chas from '../../chas';

// Estilização dos componentes
const Container = styled.ScrollView`
  flex: 1;
  background-color: #f0f8f5;
  padding: 20px;
`;

const Logo = styled.View`
  width: 100px;
  height: 100px;
  background-color: #6ab04c;
  border-radius: 50px;
  margin: 40px auto 20px;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.Text`
  color: white;
  font-size: 40px;
`;

const WelcomeText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
  color: #2e7d32;
  text-align: center;
`;

const SearchContainer = styled.View`
  width: 100%;
  height: 50px;
  margin: 10px 0;
  padding: 0 10px;
  border: 1px solid #2e7d32;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  background-color: white;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  height: 100%;
`;

const SearchIcon = styled.TouchableOpacity`
  padding: 5px;
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
  width: 250px;
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

const WarningText = styled.Text`
  font-size: 14px;
  color: #d32f2f;
  text-align: center;
  margin-top: 20px;
`;

const ViewAllButton = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: #2e7d32;
  padding: 10px 20px;
  border-radius: 30px;
  align-self: center;
`;

const ViewAllText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const HealthTipCard = styled.View`
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 30px;
  margin: 10px 0;
  width: 100%;
  align-items: center;
`;

// Dicas de saúde
const healthTips = [
  { id: 1, tip: 'Beba bastante água diariamente.' },
  { id: 2, tip: 'Durma pelo menos 7-8 horas por noite.' },
  { id: 3, tip: 'Inclua frutas e vegetais em sua dieta.' },
];

// Componente principal (Home)
export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const featuredTeas = chas.slice(-3).reverse(); // Últimos 3 chás cadastrados

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/SearchResults?query=${searchQuery}`);
    }
  };

  return (
    <Container>
      {/* Logo do app */}
      <Logo>
        <LogoText>🍵</LogoText>
      </Logo>
      <WelcomeText>Bem-vindo à Pastoral da Saúde!</WelcomeText>
      <SearchContainer>
        <SearchInput
          placeholder="Buscar por chá ou sintoma..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <SearchIcon onPress={handleSearch}>
          <Search size={24} color="#2e7d32" />
        </SearchIcon>
      </SearchContainer>
      <SectionTitle>Chás em Destaque</SectionTitle>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredTeas.map((tea) => (
          <CardContainer key={tea.id}>
            <CardImage source={tea.imagem} />
            <CardText>{tea.nome}</CardText>
            <CardDescription>{tea.propriedades}</CardDescription>
            <CardDescription>Preparo: {tea.preparação}</CardDescription>
          </CardContainer>
        ))}
      </ScrollView>
      <ViewAllButton onPress={() => router.push('/ListaChas')}>
        <ViewAllText>Ver Lista Completa</ViewAllText>
      </ViewAllButton>
      <SectionTitle>Dicas de Saúde</SectionTitle>
      {healthTips.map((tip) => (
        <HealthTipCard key={tip.id}>
          <CardText>{tip.tip}</CardText>
        </HealthTipCard>
      ))}
      <WarningText>
        As informações fornecidas são orientativas. Consulte sempre um médico para diagnóstico e tratamento adequado.
      </WarningText>
    </Container>
  );
}
