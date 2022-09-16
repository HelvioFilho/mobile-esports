import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 32px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.BLACK};
  font-size: ${({theme}) => RFValue(theme.fontSize.LG)}px;
  color: ${({theme}) => theme.colors.TEXT};
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.REGULAR};
  font-size: ${({theme}) => RFValue(theme.fontSize.MD)}px;
  color: ${({theme}) => theme.colors.CAPTION_400};
`;