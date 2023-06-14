import * as Yup from "yup";

export const schema = Yup.object().shape({
  driverLicense: Yup.string()
    .required('CNH é obrigatória'),
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  name: Yup.string()
    .required('Nome é obrigatório')
});