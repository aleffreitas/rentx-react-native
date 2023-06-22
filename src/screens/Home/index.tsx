import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import { CarList, Container, Header, HeaderContent, TotalCars} from './styles';

import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { LoadAnimation } from '../../components/LoadAnimation';
import { useNetInfo } from '@react-native-community/netinfo';
import { synchronize } from '@nozbe/watermelondb/sync';
import { database } from '../../database';
import { Car as ModelCar } from '../../database/model/Car';

export function Home(){
  const [cars, setCars] = useState<ModelCar[]>([]);
  const [loading, setLoading] = useState(true);

  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const synchronizing = useRef(false);
  let isMounted = true;

  function handleCarDetails(car: CarDTO){
    navigation.navigate('CarDetails', {car});
  }

  async function fetchCars(){
    try {
      const carCollection = database.get<ModelCar>('cars');
      const cars = await carCollection.query().fetch();

      if(isMounted){
        setCars(cars);
      }

    } catch (error) {
      console.log(error);

    } finally {
      if(isMounted){
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchCars();
    return () => {
      isMounted = false;
    };
  },[]);

  useEffect(() => {
    const syncChanges = async () => {
      if (netInfo.isConnected && !synchronizing.current) {
        synchronizing.current = true;
        try {
          await synchronize({
            database,
            pullChanges: async({ lastPulledAt }) => {
              const response = await api
              .get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);
      
              const { changes, latestVersion } = response.data;
              return { changes, timestamp: latestVersion };
            },
            pushChanges: async({ changes }) => {
              const user = changes.users;
              await api.post('/users/sync', user);
            }
          });
        }
        catch (err) {
          console.log(err);
        }
        finally {
          synchronizing.current = false;
        }
      }
    }

    syncChanges();
  }, [netInfo.isConnected]);

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
          {!loading && 
            <TotalCars>Total de {cars.length} carros</TotalCars>
          }
        </HeaderContent>
      </Header>

      {loading? <LoadAnimation /> : 
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Car
              data={item}
              onPress={() => handleCarDetails(item)}
            />
          }      
        />
      }
    </Container>
  );
}