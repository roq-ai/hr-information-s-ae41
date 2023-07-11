import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
