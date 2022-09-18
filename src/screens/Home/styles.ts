import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${RFValue(214)}px;
  height: ${RFValue(120)}px;
  margin-top: 74px;
  margin-bottom: 48px;
`;