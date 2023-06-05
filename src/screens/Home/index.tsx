import React, { useEffect, useState } from 'react';
import { CarList, Container, Header, HeaderContent, TotalCars} from './styles';
import { StatusBar } from 'react-native';

import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Loading } from '../../components/Load/styles';

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
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

  async function fetchCars(){
    try {
      const response = await api.get('/cars');
      setCars(response.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  },[]);

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

      {loading? <Loading /> : 
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Car
              data={item}
              onPress={handleCarDetails}
            />
          }      
        />
      }

    </Container>
  );
}