import styled, { css } from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_primary};
  `};
  flex: 1;
`;

export const Header = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.header};
  `};
  width: 100%;
  height: 227px;
  padding: 0 24px;
  align-items: center;
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background_secondary};
    font-family: ${theme.fonts.secondary_600};
  `};
  font-size: ${RFValue(25)}px;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const PhotoContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
  `};
  width: 180px;
  height: 180px;
  border-radius: 90px;
  margin-top: 48px;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 90px;
`;

export const PhotoButton = styled(RectButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
  `};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;