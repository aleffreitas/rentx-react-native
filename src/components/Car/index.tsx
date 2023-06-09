import React from 'react';

import { About, Brand, CarImage, Container, Details, Name, Period, Price, Rent, Type } from './styles';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { Car as ModelCar} from '../../database/model/Car';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { useNetInfo } from '@react-native-community/netinfo';

interface CarProps extends RectButtonProps{
  data: ModelCar;
}

export function Car({ data, ...rest }: CarProps){
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  const netInfo = useNetInfo();

  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <Details>
          <Brand>{data.brand}</Brand>
          <Name>{data.name}</Name>

          <About>
            <Rent>
              <Period>{data.period}</Period>
              <Price>{`R$ ${netInfo.isConnected === true ? data.price : '...'}`}</Price>
            </Rent>

            <Type>
              <MotorIcon />
            </Type>
          </About>
        </Details>

        <CarImage
          source={{ uri: data.thumbnail }}
          resizeMode='contain'
        />
      </Container>
    </GestureHandlerRootView>
  );
}