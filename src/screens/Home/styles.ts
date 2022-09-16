import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${RFValue(214)}px;
  height: ${RFValue(120)}px;
  margin-top: 74px;
  margin-bottom: 48px;
`;