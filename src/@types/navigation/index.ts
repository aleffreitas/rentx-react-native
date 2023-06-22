import { MarkedDateProps } from "../../components/Calendar"
import { CarDTO } from "../../dtos/CarDTO"
import { Car as ModelCar } from '../../database/model/Car'

export type RootStackParamList = {
  Home: undefined,
  SignIn: undefined,
  SignUpFirstStep: undefined,
  SignUpSecondStep: {
    user: {
      name: string;
      email: string;
      driverLicense: string;
    }
  },
  CarDetails: {
    car: CarDTO;
  },
  Scheduling: {
    car: ModelCar;
  },
  SchedulingDetails: {
    car: CarDTO;
    dates: string[]
  },
  Confirmation: {
    title: string;
    message: string;
    nextScreenRoute: string;
  },
  MyCars: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}