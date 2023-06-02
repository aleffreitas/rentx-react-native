import React from 'react';
import { CarList, Container, Header, HeaderContent, TotalCars} from './styles';
import { StatusBar } from 'react-native';

import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';

export function Home(){
  const navigation = useNavigation();

  const carData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120
    },
    thumbnail: 'https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028935.6138937.png'
  }

  function handleCarDetails(){
    navigation.navigate('CarDetails');
  }

  return(
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) =>
          <Car
            data={carData}
            onPress={handleCarDetails}
          />
        }      
      />

    </Container>
  );
}