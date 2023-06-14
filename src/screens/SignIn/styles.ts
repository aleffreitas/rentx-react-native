import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_primary};
  `}
  flex: 1;
  padding: 0 24px;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 115}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.fonts.secondary_600};
  `}
  font-size: ${RFValue(40)}px;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary_400};
  `}
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  margin-top: 16px;
`;

export const Footer = styled.View`
  
`;

export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`;