import React from 'react';

import { Container, Title } from './styles';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps{
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps){
  return (
    <GestureHandlerRootView>
      <Container color={color} {...rest}>
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
}