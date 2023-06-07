import React from 'react';

import { Container, Title } from './styles';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

interface ButtonProps extends RectButtonProps{
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({ title, color, enabled = true, loading = false, ...rest }: ButtonProps){
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
          <Title>{title}</Title>
        }
      </Container>
    </GestureHandlerRootView>
  );
}