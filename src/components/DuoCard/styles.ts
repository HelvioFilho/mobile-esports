import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 200px;
  background-color: ${({theme}) => theme.colors.SHAPE};
  border-radius: 8px;
  padding: 20px;
  margin-right: 16px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 36px;
  border-radius: 6px;
  background-color: ${({theme}) => theme.colors.PRIMARY};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.SEMI_BOLD};
  font-size: ${({theme}) => RFValue(theme.fontSize.SM)}px;
  color: ${({theme}) => theme.colors.TEXT};
  margin-left: 8px;
`;