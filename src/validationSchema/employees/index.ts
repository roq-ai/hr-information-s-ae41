import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  vacation_days: yup.number().integer(),
  benefits: yup.string(),
  payroll: yup.number().integer(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
