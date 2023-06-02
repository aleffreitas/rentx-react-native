import React from 'react';

import { About, Accessories, Brand, CarImages, Container, Content, Description, Details, Footer, Header, Name, Period, Price, Rent } from './styles';
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
import { useNavigation } from '@react-navigation/native';

export function CarDetails(){
  const navigation = useNavigation();

  function handleConfirmRental(){
    navigation.navigate('Scheduling');
  }
  
  return (
    <Container>
      <Header>
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

        <About>
          Este é automóvel desportivo. Surgiu do lendário
          touro de lide idultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button
          title='Escolher período do aluguel'
          onPress={handleConfirmRental}
        />
      </Footer>

    </Container>
  );
}