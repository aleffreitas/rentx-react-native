import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../../components/BackButton';
import { Container, Form, FormTitle, Header, Steps, SubTitle, Title } from './styles';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { PasswordInput } from '../../../components/PasswordInput';
import { useTheme } from 'styled-components';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SignUpSecondStep(){
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const { user } = route.params as Params;

  function handleRegister(){
    if(!password || !passwordConfirm){
      return Alert.alert('Informe a senha e a confirmação.');
    }

    if(passwordConfirm !== password){
      return Alert.alert('As senhas não são iguais.');
    }

    navigation.navigate('Confirmation', {
      title: 'Conta Criada!',
      nextScreenRoute: 'SignIn',
      message: `Agora é só fazer login\ne aproveitar.`,
    });
  }

  function handleBack(){
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />

            <Steps>
              <Bullet active/>
              <Bullet />
            </Steps>
          </Header>

          <Title>
            Crie sua {'\n'}conta
          </Title>
          <SubTitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>02. Senha</FormTitle>
            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              onChangeText={(value) => setPassword(value)}
              value={password}
            />
            <PasswordInput
              iconName='lock'
              placeholder='Repetir Senha'
              onChangeText={(value) => setPasswordConfirm(value)}
              value={passwordConfirm}
            />
          </Form>

          <Button
            title='Cadastrar'
            color={theme.colors.success}
            onPress={handleRegister}
          />

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}