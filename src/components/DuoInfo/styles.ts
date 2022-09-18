import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ValueProps {
  color: string;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.CAPTION_300};
  font-family: ${({ theme }) => theme.fontFamily.REGULAR};
  font-size: ${({ theme }) => RFValue(theme.fontSize.SM)}px;
  margin-bottom: 4px;
`;

export const Value = styled.Text<ValueProps>`
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fontFamily.BOLD};
  font-size: ${({ theme }) => RFValue(theme.fontSize.SM)}px;
`;