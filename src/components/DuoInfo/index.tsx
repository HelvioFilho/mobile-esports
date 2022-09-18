import React from 'react';

import { Container, Label, Value } from './styles';

interface DuoInfoProps {
  label: string;
  value: string;
  color: string;
}

export function DuoInfo({ label, value, color }: DuoInfoProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Value
        color={color}
        numberOfLines={1}
      >{value}</Value>
    </Container>
  );
}