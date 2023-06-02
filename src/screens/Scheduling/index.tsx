import React from 'react';

import { Container, Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, Title } from './styles';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling(){
  const theme = useTheme();

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
          onPress={() => {}}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={true}>01/06/2023</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title='Confirmar'/>
      </Footer>

    </Container>
  );
}