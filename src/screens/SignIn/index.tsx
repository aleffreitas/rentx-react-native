import React, { useState } from 'react';
import * as Yup from 'yup';

import { Container, Footer, Form, Header, SubTitle, Title } from './styles';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { schema } from './validations';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const theme = useTheme();
  const navigation = useNavigation();

  async function handleSignIn(){
    try {
      await schema.validate({ email, password });
      signIn({ email, password })
      
    } catch (error) {
      if(error instanceof Yup.ValidationError){
        return Alert.alert('Opa', error.message);
      } else {
        return Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        );
      }
    }
  }

  function handleNewAccount(){
    navigation.navigate('SignUpFirstStep');
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              onChangeText={(value) => setEmail(value)}
              value={email}
            />
            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              onChangeText={(value) => setPassword(value)}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title='Login'
              enabled={true}
              loading={false}
              onPress={handleSignIn}
            />

            <Button
              title='Criar conta gratuita'
              color={theme.colors.background_secondary}
              light
              enabled
              loading={false}
              onPress={handleNewAccount}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}