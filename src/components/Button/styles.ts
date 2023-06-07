import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface ContainerProps extends RectButtonProps{
  color?: string;
  enabled: boolean;
  loading?: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, color, enabled, loading }) => css`
    background-color: ${color ? color : theme.colors.main};
    opacity: ${(enabled === false || loading === true) ? .5 : 1};
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