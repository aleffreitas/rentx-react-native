import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Accessories, Brand, CalendarIcon, CarImages, Container, Content, DateInfo, DateTitle, DateValue, Description, Details, Footer, Header, Name, Period, Price, Rent, RentalPeriod, RentalPrice, RentalPriceDetails, RentalPriceLabel, RentalPriceQuota, RentalPriceTotal } from './styles';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails(){
  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmRental(){
    navigation.navigate('SchedulingComplete');
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle='dark-content'
          translucent
          backgroundColor='transparent'
        />
        <BackButton onPress={() => {}}/>
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={['https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028935.6138937.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>RS 5</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name='380km/h' icon={SpeedSvg} />
          <Accessory name='3.2s' icon={AccelerationSvg} />
          <Accessory name='800 HP' icon={ForceSvg} />
          <Accessory name='Gasolina' icon={GasolineSvg} />
          <Accessory name='Auto' icon={ExchangeSvg} />
          <Accessory name='2 Pessoas' icon={PeopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>01/06/2023</DateValue>
          </DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>01/06/2023</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 1.740</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button
          title='Alugar agora'
          onPress={handleConfirmRental}
          color={theme.colors.success}
        />
      </Footer>

    </Container>
  );
}