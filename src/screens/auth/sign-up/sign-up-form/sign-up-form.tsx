import { FC } from 'react';
import * as yup from 'yup';

import { Form, FormProps, SubmitButton, TextInput } from '@/components/business/form';

const ininitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
}

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('first name is required'),
  lastName: yup
    .string()
    .required('last name is required'),
  email: yup
    .string()
    .required('email is required'),
  password: yup
    .string()
    .min(8)
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z]).*$/),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Password confirm is required'),
})

export interface SignUpFormProps {
  onSignUp: FormProps['onSubmit'];
}

export const SignUpForm: FC<SignUpFormProps> = ({ onSignUp }) => (
  <Form
    initialValues={ininitialValues}
    validationSchema={validationSchema}
    onSubmit={onSignUp}
  >
    <TextInput
      name="firstName"
      label="First name"
    />
    <TextInput
      name="lastName"
      label="Last name"
    />
    <TextInput
      name="email"
      label="Email"
    />
    <TextInput
      secureTextEntry
      name="password"
      label="Password"
      helperText="A password must be at least 8 characters. It has to have at least one letter and one digit."
    />
    <TextInput
      secureTextEntry
      name="repeatPassword"
      label="Pepeat Password"
    />
    <SubmitButton>Sign Up</SubmitButton>
  </Form>
);