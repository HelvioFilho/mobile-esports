import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 32px;
  margin-top: 28px;
  justify-content: space-between
`;

export const BackButton = styled.TouchableOpacity`

`;

export const Logo = styled.Image`
  width: ${RFValue(72)}px;
  height: ${RFValue(40)}px;
`;

export const Banner = styled.Image`
  width: 311px;
  height: 160px;
  border-radius: 8px;
  margin-top: 32px;
`;

export const ContainerGame = styled.FlatList`
  width: 100%;
`;

export const Empty = styled.Text`
  width: 80%;
  font-family: ${({theme}) => theme.fontFamily.REGULAR};
  font-size: ${({theme}) => RFValue(theme.fontSize.MD)}px;
  color: ${({theme}) => theme.colors.CAPTION_300};
`;