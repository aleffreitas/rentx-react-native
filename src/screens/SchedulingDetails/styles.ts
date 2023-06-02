import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
  `}
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-left: 24px;
  margin-top: ${getStatusBarHeight() + 18}px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 38px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};
  `}
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.title};
  `}
  font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};
  `}
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.main};
  `}
  font-size: ${RFValue(25)}px;
`;

export const Accessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
  `}
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;

export const RentalPeriod = styled.View`
  ${({ theme }) => css`
    border-bottom-color: ${theme.colors.line};
  `}
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  border-bottom-width: 1px;
  padding-bottom: 16px;
`;

export const CalendarIcon = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
  `}
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text_detail};
  `}
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.title};
  `}
  font-size: ${RFValue(15)}px;
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalPriceLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text_detail};
  `}
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuota = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.title};
  `}
  font-size: ${RFValue(15)}px;
`;

export const RentalPriceTotal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.success};
  `}
  font-size: ${RFValue(24)}px;
`;





