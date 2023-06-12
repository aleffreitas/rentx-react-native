import React from 'react';
import { Button, Dimensions, StyleSheet } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Container } from './styles';

const width = Dimensions.get('window').width;

export function Splash(){
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animation.value,{
            duration: 500,
            easing: Easing.bezier(.02,1.08,1,-0.32)
          }) 
        }
      ]
    }
  });

  function handleAnimationPosition(){
    animation.value = Math.random() * (width - 100);
  }

  return (
    <Container>
      <Animated.View style={[styles.box, animatedStyles]}/>

      <Button title='mover' onPress={handleAnimationPosition}/>
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  }
});