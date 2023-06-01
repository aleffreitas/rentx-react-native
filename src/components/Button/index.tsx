import React from 'react';

import { Container, Title } from './styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface ButtonProps {
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