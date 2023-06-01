import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
  `}
  flex: 1;
`;

export const Header = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.header};
  `}
  width: 100%;
  height: 325px;
  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.secondary_600};
  `}
  font-size: ${RFValue(34)}px;
  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.secondary_500};
  `}
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.primary_500};
  `}
  font-size: ${RFValue(15)}px;

  ${({ theme, selected }) => !selected && css`
    border-bottom-color: ${theme.colors.text};
    border-bottom-width: 1px;
    padding-bottom: 5px;
  `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: 24px;
`;
