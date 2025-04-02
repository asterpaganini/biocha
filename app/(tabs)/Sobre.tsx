import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { BottomNavigationHeight } from '../_layout';

// Estilização dos componentes
const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f0f8f5;
  padding: 20px;
  padding-bottom: ${() => BottomNavigationHeight}px;
`;

const ScrollContainer = styled.ScrollView`
  flex-grow: 1;
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #2e7d32;
  text-align: center;
  margin-bottom: 20px;
`;

const ContentText = styled.Text`
  font-size: 16px;
  color: #1b5e20;
  text-align: justify;
  margin-bottom: 15px;
`;

const ContactText = styled.Text`
  font-size: 16px;
  color: #1b5e20;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const LogoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const LogoImage = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin: 10px;
  resize-mode: contain;
  margin-bottom: 20px;
`;

export default function SobreScreen() {
  return (
    <Container>
      <ScrollContainer showsVerticalScrollIndicator={false}>
        <SectionTitle>Sobre o BioChá</SectionTitle>
        <ContentText>
          O aplicativo <Text style={{ fontWeight: 'bold' }}>BioChá</Text> é uma iniciativa do acadêmico
          <Text style={{ fontWeight: 'bold' }}> Giovani Paganini</Text>, estudante do curso de
          <Text style={{ fontWeight: 'bold' }}> Ciências da Computação</Text> na
          <Text style={{ fontWeight: 'bold' }}> Universidade Estácio de Sá</Text>, desenvolvido como parte do trabalho de extensão da disciplina
          <Text style={{ fontWeight: 'bold' }}> Programação para Dispositivos Móveis em Android</Text>.
        </ContentText>
        <ContentText>
          Em colaboração com a <Text style={{ fontWeight: 'bold' }}>Pastoral da Saúde de Caçador</Text>, vinculada à
          <Text style={{ fontWeight: 'bold' }}> Paróquia Cristo Redentor</Text>, o projeto teve como objetivo
          catalogar os principais chás medicinais regionais utilizados pela instituição. O foco é valorizar a fitoterapia e resgatar
          o conhecimento popular sobre plantas medicinais, além de facilitar o trabalho dos agentes voluntários, que dedicam
          seu tempo ao atendimento comunitário.
        </ContentText>
        <ContentText>
          ⚠ <Text style={{ fontWeight: 'bold', color: '#d32f2f' }}>Atenção:</Text> Todas as informações contidas no aplicativo são de caráter informativo e
          <Text style={{ fontWeight: 'bold' }}> não substituem a consulta com um profissional de saúde</Text>. Sempre consulte um médico ou fitoterapeuta antes de iniciar qualquer tratamento.
        </ContentText>
        <ContactText>📍 Endereço: Rua Henrique Júlio Berger, 271 – Bairro Berger, Caçador/SC</ContactText>
        <ContactText>📞 Telefone: (49) 3563-0571</ContactText>
        <LogoContainer>
          <LogoImage source={require('../../assets/icon.png')} />
          <LogoImage source={require('../../images/logo-nacional.jpg')} />
          <LogoImage source={require('../../images/logo-sc.jpg')} />
          <LogoImage source={require('../../images/logo-estacio.jpg')} />
        </LogoContainer>
      </ScrollContainer>
    </Container>
  );
}