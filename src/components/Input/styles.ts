import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
  `}
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 56px;
  margin-right: 2px;
`;

export const InputText = styled(TextInput)`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary_400};
  `}
  font-size: ${RFValue(15)}px;
  flex: 1;
  padding: 0 23px;
`;