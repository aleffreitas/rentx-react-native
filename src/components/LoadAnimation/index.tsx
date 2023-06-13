import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import loadingCar from '../../assets/loading_car.json';

import { Container } from './styles';

export function LoadAnimation(){
  return (
    <Container>
      <AnimatedLottieView
        source={loadingCar}
        autoPlay
        resizeMode='contain'
        loop
        style={{
          height: 200
        }}
      />
    </Container>
  );
}