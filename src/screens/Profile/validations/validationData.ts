import * as Yup from "yup";

export const dataSchema = Yup.object().shape({
  driverLicense: Yup.string()
    .required('CNH é obrigatória'),
  name: Yup.string()
    .required('Nome é obrigatório')
});