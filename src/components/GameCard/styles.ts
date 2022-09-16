import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-right: 24px;
`;

export const Cover = styled.ImageBackground`
  width: 240px;
  height: 320px;
  justify-content: flex-end;
  border-radius: 8px;
  overflow: hidden;
`;

export const Footer = styled(LinearGradient)`
  width: 100%;
  height: 102px;
  padding: 16px;
  justify-content: flex-end;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.BOLD};
  font-size: ${({theme}) => RFValue(theme.fontSize.MD)}px;
  color: ${({theme}) => theme.colors.TEXT};
`;

export const Ads = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.REGULAR};
  font-size: ${({theme}) => RFValue(theme.fontSize.MD)}px;
  color: ${({theme}) => theme.colors.CAPTION_300};
`;