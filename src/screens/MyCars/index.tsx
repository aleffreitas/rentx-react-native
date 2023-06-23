import React, { useEffect, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { FlatList, StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { Car } from '../../components/Car';
import { Car as ModelCar } from '../../database/model/Car';
import { LoadAnimation } from '../../components/LoadAnimation';
import { format, parseISO } from 'date-fns';

import { Appointments, AppointmentsQuantity, AppointmentsTitle, CarFooter, CarFooterDate, CarFooterPeriod, CarFooterTitle, CarWrapper, Container, Content, Header, SubTitle, Title } from './styles';

interface DataProps {
  id: string;
  car: ModelCar;
  start_date: string;
  end_date: string;
}

export function MyCars(){
  const [cars, setCars] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);

  const screenIsFocus = useIsFocused();
  const navigation = useNavigation();
  const theme = useTheme();

  function handleBack(){
    navigation.goBack();
  };

  async function fetchCars(){
    try {
      const response = await api.get('/rentals');
      const dataFormatted = response.data.map((data: DataProps) => {
        return {
          id: data.id,
          car: data.car,
          start_date: format(parseISO(data.start_date), 'dd/MM/yyyy'),
          end_date: format(parseISO(data.end_date), 'dd/MM/yyyy'),
        }
      });

      setCars(dataFormatted);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  }, [screenIsFocus]);

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

      {loading ? <LoadAnimation /> :
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
                        <CarFooterDate>{item.start_date}</CarFooterDate>
                          <AntDesign
                            name='arrowright'
                            size={20}
                            color={theme.colors.title}
                            style={{ marginHorizontal: 10 }}
                          />
                        <CarFooterDate>{item.end_date}</CarFooterDate>
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