import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { Container, Header, HeaderTitle, HeaderTop, LogoutButton, Photo, PhotoButton, PhotoContainer } from './styles';
import { BackButton } from '../../components/BackButton';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

export function Profile(){
  const navigation = useNavigation();
  const theme = useTheme();

  function handleBack(){
    navigation.goBack();
  };

  function handleSignedOut(){

  };

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />

      <Header>
        <HeaderTop>
          <BackButton
            color={theme.colors.shape}
            onPress={() => handleBack()}
          />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton
            onPress={handleSignedOut}
          >
            <Feather
              name='power'
              size={24}
              color={theme.colors.shape}
            />
          </LogoutButton>
        </HeaderTop>

        <PhotoContainer>
          <Photo source={{ uri: 'https://github.com/aleffreitas.png'}}/>
          <PhotoButton onPress={() => {}}>
            <Feather
              name='camera'
              size={24}
              color={theme.colors.shape}
            />
          </PhotoButton>
        </PhotoContainer>
      </Header>
    </Container>
  );
}