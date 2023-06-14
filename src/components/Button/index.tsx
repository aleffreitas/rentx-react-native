import React from 'react';

import { Container, Title } from './styles';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

interface ButtonProps extends RectButtonProps{
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title, 
  color, 
  light = false,
  enabled = true, 
  loading = false, 
  ...rest 
}: ButtonProps){
  const theme = useTheme();

  return (
    <GestureHandlerRootView>
      <Container
        color={color}
        enabled={enabled}
        loading={loading}
        {...rest}
      >
        {loading ?
          <ActivityIndicator color={theme.colors.shape}/>
        :
          <Title light={light}>{title}</Title>
        }
      </Container>
    </GestureHandlerRootView>
  );
}