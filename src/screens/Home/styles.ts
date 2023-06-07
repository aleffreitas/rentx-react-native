import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { CarDTO } from '../../dtos/CarDTO';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_primary};
  `}
  flex: 1;
`;

export const Header = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.header};
  `}
  width: 100%;
  height: 113px;

  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TotalCars = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.text};
  `}
  font-size: ${RFValue(15)}px;
`;

export const CarList = styled(FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false
})`
`;

export const ContentButton = styled.View`
  width: 100%;
  position: absolute;
  bottom: 13px;
  right: 22px;
  align-items: flex-end;
`;

export const MyCarsButton = styled(RectButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
  `}
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;