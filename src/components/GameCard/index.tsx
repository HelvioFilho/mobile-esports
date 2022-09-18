import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Ads, Container, Cover, Footer, Name } from './styles';

export interface GameCardProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container
      onPress={() => { }}
      activeOpacity={0.7}
      {...rest}
    >
      <Cover
        source={{ uri: data.bannerUrl }}
      >
        <Footer
          colors={theme.colors.FOOTER}
        >
          <Name>{data.title}</Name>
          <Ads>{`${data._count.ads} anúncio${data._count.ads !== 1 ? 's' : ''}`}</Ads>
        </Footer>
      </Cover>
    </Container>
  );
}