import React from 'react';
import { Container } from './styles';
import BackgroundImg from '../../assets/background-galaxy.png';

interface BackgroundProps {
  children: React.ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <Container
      source={BackgroundImg}
      defaultSource={BackgroundImg}
    >
      {children}
    </Container>
  );
}