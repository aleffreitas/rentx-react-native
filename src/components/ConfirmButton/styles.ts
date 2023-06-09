import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape_dark};
  `}
  width: 80px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.primary_500};
  `}
  font-size: ${RFValue(15)}px;
`;