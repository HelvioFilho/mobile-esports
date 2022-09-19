import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.OVERLAY};
`;

export const Content = styled.View`
  width: 311px;
  background-color: ${({theme}) => theme.colors.SHAPE};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Close = styled(TouchableOpacity)`
  align-self: flex-end;
  margin: 16px;
`;

export const Label = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.SEMI_BOLD};
  font-size: ${({theme}) => RFValue(theme.fontSize.MD)}px;
  color: ${({theme}) => theme.colors.TEXT};
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const DiscordButton = styled(TouchableOpacity)`
  width: 231px;
  height: 48px;
  background-color: ${({theme}) => theme.colors.BACKGROUND_900};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 32px;
`;

export const Discord = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.REGULAR};
  font-size: ${({theme}) => RFValue(theme.fontSize.MD)}px;
  color: ${({theme}) => theme.colors.TEXT};
`;