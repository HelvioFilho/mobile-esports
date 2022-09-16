import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageSourcePropType, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Ads, Container, Cover, Footer, Name } from './styles';

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container
      onPress={() => {}}
      activeOpacity={0.7}
      {...rest}
    >
      <Cover
        source={data.cover}
      >
      <Footer 
        colors={theme.colors.FOOTER}
      >
        <Name>{data.name}</Name>
        <Ads>{data.ads} anúncios</Ads>
      </Footer>
      </Cover>
    </Container>
  );
}