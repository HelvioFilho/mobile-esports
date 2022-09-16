import React from 'react';
import { ViewProps } from 'react-native';

import { Container, SubTitle, Title } from './styles';

interface HeadingProps extends ViewProps{
  title: string;
  subtitle: string;
}

export function Heading({title, subtitle, ...rest}: HeadingProps){
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}