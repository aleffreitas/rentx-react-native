import React from 'react';

import { Container, Footer, Form, Header, SubTitle, Title } from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

export function SignIn(){
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      <Header>
        <Title>
          Estamos{'\n'}
          quase lá
        </Title>
        <SubTitle>
          Faça seu login para começar{'\n'}
          uma experiência incrível.
        </SubTitle>
      </Header>

      <Form>
        <Input
          iconName='mail'
          placeholder='E-mail'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
        />
        <PasswordInput
          iconName='lock'
          placeholder='Senha'
        />
      </Form>

      <Footer>
        <Button
          title='Login'
          enabled={false}
          loading={false}
          onPress={() => {}}
        />

        <Button
          title='Criar conta gratuita'
          color={theme.colors.background_secondary}
          light
          enabled
          loading={false}
          onPress={() => {}}
        />
      </Footer>
    </Container>
  );
}