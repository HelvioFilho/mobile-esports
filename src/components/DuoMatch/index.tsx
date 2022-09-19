import React, { useState } from 'react';
import { ActivityIndicator, Alert, Modal, ModalProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Heading } from '../Heading';
import * as Clipboard from 'expo-clipboard';

import { CheckCircle } from 'phosphor-react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import {
  Close,
  Container,
  Content,
  Discord,
  DiscordButton,
  Label
} from './styles';

interface DuoMatchProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps) {
  const [isCopping, setIsCopping] = useState(false);
  const theme = useTheme();

  async function handleCopyDiscordToClipboard(){
    setIsCopping(true);
    try{
      await Clipboard.setStringAsync(discord);
      Alert.alert("Discord Copiado!", 'Usuário copiado, agora você pode colar no discord e adicionar a pessoa!');
    }catch(e){
      console.log(e);
      Alert.alert("Atenção!", 'Algo deu errado e não foi possível copiar!')
    }finally{
      setIsCopping(false);
    }
  }

  return (
    <Modal
      transparent
      statusBarTranslucent
      {...rest}
    >
      <Container>
        <Content>
          <Close
            onPress={onClose}
          >
            <MaterialIcons
              name="close"
              size={RFValue(20)}
              color={theme.colors.CAPTION_500}
            />
          </Close>
          <CheckCircle
            size={RFValue(64)}
            color={theme.colors.SUCCESS}
            weight="bold"
          />
          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: 'center', marginTop: 24 }}
          />
          <Label>Adicione no Discord</Label>
          <DiscordButton
            onPress={handleCopyDiscordToClipboard}
            activeOpacity={0.8}
            disabled={isCopping}

          >
            {
              isCopping ?
              <ActivityIndicator /> :
            <Discord>{discord}</Discord>
            }
          </DiscordButton>
        </Content>
      </Container>
    </Modal>
  );
}