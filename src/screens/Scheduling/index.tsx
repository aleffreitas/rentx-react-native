import React, { useState } from 'react';

import { Container, Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, Title } from './styles';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar, DayProps, MarkedDateProps } from '../../components/Calendar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { generateInterval } from '../../components/Calendar/generateIntervals';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format } from 'date-fns';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriodProps {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export function Scheduling(){
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental(){
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates)
    });
  }

  function handleBack(){
    navigation.goBack();
  };

  function handleChangeDate(date: DayProps){
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp){
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);

    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });
  }

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
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button
          title='Confirmar'
          onPress={handleConfirmRental}
          enabled={!!rentalPeriod.startFormatted}
        />
      </Footer>

    </Container>
  );
}