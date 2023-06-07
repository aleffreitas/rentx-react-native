import React, { useEffect, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { FlatList, StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { Car } from '../../components/Car';


import { Appointments, AppointmentsQuantity, AppointmentsTitle, CarFooter, CarFooterDate, CarFooterPeriod, CarFooterTitle, CarWrapper, Container, Content, Header, SubTitle, Title } from './styles';
import { Load } from '../../components/Load/indes';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars(){
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const theme = useTheme();

  function handleBack(){
    navigation.goBack();
  };

  async function fetchCars(){
    try {
      const response = await api.get('/schedules_byuser?user_id=1');
      setCars(response.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle='light-content'
          translucent
          backgroundColor='transparent'
        />

        <BackButton
          color={theme.colors.shape}
          onPress={() => handleBack()}
        />

        <Title>
          Seus agendamentos,{'\n'}
          estão aqui
        </Title>

        <SubTitle>Conforto, segurança e praticidade</SubTitle>
      </Header>

      {loading ? <Load /> :
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <CarWrapper>
                <Car data={item.car} />
                  <CarFooter>
                    <CarFooterTitle>Período</CarFooterTitle>
                      <CarFooterPeriod>
                        <CarFooterDate>{item.startDate}</CarFooterDate>
                          <AntDesign
                            name='arrowright'
                            size={20}
                            color={theme.colors.title}
                            style={{ marginHorizontal: 10 }}
                          />
                        <CarFooterDate>{item.endDate}</CarFooterDate>
                      </CarFooterPeriod>
                  </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      }
    </Container>
  );
}