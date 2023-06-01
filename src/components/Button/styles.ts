import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface ContainerProps extends RectButtonProps{
  color?: string;
}

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, color }) => css`
    background-color: ${color ? color : theme.colors.main};
  `}
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.shape};
  `}
  font-size: ${RFValue(15)}px;
`;