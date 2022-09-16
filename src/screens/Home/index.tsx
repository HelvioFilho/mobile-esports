import React from 'react';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';

import { Container, Logo } from './styles';

import { GAMES } from '../../utils/games';
import { GameCard } from '../../components/GameCard';
import { FlatList } from 'react-native';

export function Home() {
  return (
    <Container>
      <Logo
        source={logoImg}
      />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 32, paddingRight: 64}}
      />
    </Container>
  );
}