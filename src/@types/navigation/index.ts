import { MarkedDateProps } from "../../components/Calendar"
import { CarDTO } from "../../dtos/CarDTO"

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
    car: CarDTO
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