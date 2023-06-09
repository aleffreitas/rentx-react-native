import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { Container, Content, Footer, LogoWrapper, Message, Title } from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

interface Navigation {
  navigate: (value: string) => void;
}

export function Confirmation(){
  const { width } = useWindowDimensions();

  const navigation = useNavigation<Navigation>();
  const route = useRoute();

  const { message, title, nextScreenRoute } = route.params as Params;

  function handleConfirm(){
    navigation.navigate(nextScreenRoute);
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />

      <LogoWrapper>
        <LogoSvg width={width} />
      </LogoWrapper>

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton
          title='OK'
          onPress={handleConfirm}
        />
      </Footer>

    </Container>
  );
}