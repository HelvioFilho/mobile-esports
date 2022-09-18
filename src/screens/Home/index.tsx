import React, { useEffect, useState } from 'react';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';

import { Container, Logo } from './styles';

import { FlatList } from 'react-native';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const [game, setGame] = useState<GameCardProps[]>([]);

  const { navigate } = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigate('Game', { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch('http://192.168.100.107:3333/games')
      .then(response => response.json())
      .then(data => setGame(data));
  }, []);

  return (
    <Background>
      <Container>
        <Logo
          source={logoImg}
        />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          data={game}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 32, paddingRight: 64 }}
        />
      </Container>
    </Background>
  );
}