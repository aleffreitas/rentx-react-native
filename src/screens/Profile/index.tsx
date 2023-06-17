import React, { useState } from 'react';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { Container, Content, Header, HeaderTitle, HeaderTop, LogoutButton, Option, OptionTitle, Options, Photo, PhotoButton, PhotoContainer, Section } from './styles';
import { BackButton } from '../../components/BackButton';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import { Input } from '../../components/Input';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { PasswordInput } from '../../components/PasswordInput';
import { useAuth } from '../../hooks/auth';
import { Button } from '../../components/Button';
import { dataSchema } from './validations/validationData';

export function Profile(){
  const { user, signedOut, updateUser } = useAuth();

  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);

  const navigation = useNavigation();
  const theme = useTheme();

  function handleBack(){
    navigation.goBack();
  };

  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit'){
    setOption(optionSelected);
  };

  async function handleAvatarSelect(){
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if(result.canceled){
      return;
    }

    if(result.assets){
      setAvatar(result.assets[0].uri);
    }
  }

  async function handleProfileUpdate(){
    try {
      const data = { name, driverLicense };
      await dataSchema.validate(data);

      await updateUser({
        id: user.id,
        user_id: user.user_id,
        email: user.email,
        name,
        driver_license: driverLicense,
        avatar,
        token: user.token
      });

      Alert.alert('Perfil atualizado!')
      
    } catch (error) {
      if(error instanceof Yup.ValidationError){
        Alert.alert('Opa', error.message)
      }else{
        Alert.alert('Não foi possível atualizar o perfil.');
      }
    }
  }

  async function handleSignOut(){
    Alert.alert(
      'Tem certeza?',
      'Se você sair, irá precisar de internet para conectar-se novamente.',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
        },
        {
          text: 'Sair',
          onPress: () => signedOut(),
        }
      ]
    );
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                onPress={handleBack}
              />
              <HeaderTitle>Editar Perfil</HeaderTitle>
              <LogoutButton
                onPress={handleSignOut}
              >
                <Feather
                  name='power'
                  size={24}
                  color={theme.colors.shape}
                />
              </LogoutButton>
            </HeaderTop>

            <PhotoContainer>
              {!!avatar && <Photo source={{ uri: avatar}}/>}
              <PhotoButton onPress={handleAvatarSelect}>
                <Feather
                  name='camera'
                  size={24}
                  color={theme.colors.shape}
                />
              </PhotoButton>
            </PhotoContainer>
          </Header>

          <Content style={{ marginBottom: useBottomTabBarHeight()}}>
            <Options>
              <Option
                active={option === 'dataEdit'}
                onPress={() => handleOptionChange('dataEdit')}
              >
                <OptionTitle active={option === 'dataEdit'}>
                  Dados
                </OptionTitle>
              </Option>
              <Option
                active={option === 'passwordEdit'}
                onPress={() => handleOptionChange('passwordEdit')}
              >
                <OptionTitle active={option === 'passwordEdit'}>
                  Trocar senha
                </OptionTitle>
              </Option>
            </Options>

            {option === 'dataEdit' ? (
              <Section>
                <Input
                  iconName='user'
                  placeholder='Nome'
                  autoCorrect={false}
                  defaultValue={user.name}
                  onChangeText={(value) => setName(value)}
                />
                <Input
                  iconName='mail'
                  editable={false}
                  defaultValue={user.email}
                />
                <Input
                  iconName='credit-card'
                  placeholder='CNH'
                  keyboardType='numeric'
                  defaultValue={user.driver_license}
                  onChangeText={(value) => setDriverLicense(value)}
                />
              </Section>
            ) : (
              <Section>
                <PasswordInput
                  iconName='lock'
                  placeholder='Senha atual'
                />
                <PasswordInput
                  iconName='lock'
                  placeholder='Nova senha'
                />
                <PasswordInput
                  iconName='lock'
                  placeholder='Repetir senha'
                />
              </Section>
            )}
            
            <Button
              title='Salvar alterações'
              onPress={handleProfileUpdate}
            />

          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}