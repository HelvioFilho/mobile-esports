import { GameController } from 'phosphor-react-native';
import React from 'react';
import { useTheme } from 'styled-components';
import { DuoInfo } from '../DuoInfo';

import { Button, ButtonTitle, Container } from './styles';

export interface DuosCardProps {
  id: string;
  name: string;
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuosCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  const theme = useTheme();
  return (
    <Container>
      <DuoInfo
        label="Nome"
        value={data.name}
        color={theme.colors.TEXT}
      />
      <DuoInfo
        label="Tempo de jogo"
        value={
          data.yearsPlaying > 0 ?
            `${data.yearsPlaying} ano${data.yearsPlaying > 1 ? 's' : ''}` :
            'Menos de 1 ano ou nunca jogou'
        }
        color={theme.colors.TEXT}
      />
      <DuoInfo
        label="Disponibilidade"
        value={
          `${data.weekDays.length} dia${data.weekDays.length !== 1 ? 's' : ''} \u2022 ${data.hourStart} - ${data.hourEnd}`}
        color={theme.colors.TEXT}
      />
      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        color={data.useVoiceChannel ? theme.colors.SUCCESS : theme.colors.ALERT}
      />
      <Button
        onPress={onConnect}
      >
        <GameController
          color={theme.colors.TEXT}
          size={20}
        />
        <ButtonTitle>Conectar</ButtonTitle>
      </Button>
    </Container >
  );
}