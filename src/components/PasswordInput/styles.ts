import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface InputProps {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<InputProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
  `}

  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-color: ${theme.colors.main};
    border-bottom-width: 2px;
  `}

  justify-content: center;
  align-items: center;
  width: 55px;
  height: 56px;
  margin-right: 2px;
`;

export const InputText = styled(TextInput)<InputProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary_400};
  `}

  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-color: ${theme.colors.main};
    border-bottom-width: 2px;
  `}

  font-size: ${RFValue(15)}px;
  flex: 1;
  padding: 0 23px;
`;