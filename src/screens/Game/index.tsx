import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/logo-nlw-esports.png';

import { BackButton, Banner, Container, ContainerGame, Empty, Header, Logo } from './styles';
import { useTheme } from 'styled-components';
import { FlatList, View } from 'react-native';
import { Heading } from '../../components/Heading';
import { DuoCard, DuosCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';

interface GameProps{
  id: string;
  title: string;
  bannerUrl: string;
  discord: string;
}

export function Game() {
  const [duos, setDuos] = useState<DuosCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState("");
  const theme = useTheme();
  const {params} = useRoute();
  const { goBack } = useNavigation();
  const game = params as GameProps;

  async function getDiscordUser(asdId: string){
    fetch(`http://192.168.100.107:3333/ads/${asdId}/discord`)
    .then( response => response.json())
    .then( data => setDiscordDuoSelected(data.discord))
    .catch( e => console.log(e));
  }  

  useEffect(() =>{
    fetch(`http://192.168.100.107:3333/games/${game.id}/ads`)
    .then( response => response.json())
    .then( data => setDuos(data))
    .catch( e => console.log(e));
  },[]);

  return (
    <Background>
      <Container>
        <Header>
          <BackButton
            onPress={goBack}
          >
            <Entypo 
              name="chevron-thin-left"
              color={theme.colors.CAPTION_300}
              size={25}
            />
          </BackButton>
          <Logo 
            source={logoImg}
          />
          <View style={{width: 25, height: 25}}></View>
        </Header>
        <Banner 
          source={{uri: game.bannerUrl}}
          resizeMode="cover"
        />
        <Heading 
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
          style={{padding: 32}}
        />
        <ContainerGame 
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard 
              data={item}
              onConnect={() => getDiscordUser(item.id)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 32, paddingRight: 64, alignItems: 'flex-start' }}
          ListEmptyComponent={() => (
            <Empty>
              Ainda n??o h?? an??ncios publicados para esse jogo!
            </Empty>
          )}
        />
        <DuoMatch
          animationType="fade"
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected("")}
        />
      </Container>
    </Background>
  );
}