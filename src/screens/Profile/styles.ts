import styled, { css } from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface OptionProps{
  active: boolean;
}

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_primary};
  `};
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

export const Content = styled.View`
  padding: 0 24px;
  margin-top: 122px;
`;

export const Options = styled.View`
  ${({ theme }) => css`
    border-bottom-color: ${theme.colors.line};
  `}
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 24px;
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  ${({ theme, active }) => active && css`
    border-bottom-color: ${theme.colors.main};
    border-bottom-width: 3px;
  `}
  padding-bottom: 14px;
`;

export const OptionTitle = styled.Text<OptionProps>`
  ${({ theme, active }) => css`
    color: ${active ? theme.colors.header : theme.colors.text_detail};
    font-family: ${active ? theme.fonts.secondary_600 : theme.fonts.secondary_500};
  `};
  font-size: ${RFValue(20)}px;
`;

export const Section = styled.View``;
