import React from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { useTheme } from 'styled-components';

import { Container } from './styles';

interface LoadingProps {
  color?: string;
  size: number;
}

export function Loading({ color, size }: LoadingProps) {
  const theme = useTheme();
  return (
    <Container >
      <ActivityIndicator
        color={color ? color : theme.colors.PRIMARY}
        size={
          Platform.OS === 'ios' ?
            size < 30 ?
              'small' :
              'large' :
            size
        }
      />
    </Container>
  );
}