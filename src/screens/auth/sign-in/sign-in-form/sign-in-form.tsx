import { FC } from 'react';

import { Form, FormError, FormProps, SubmitButton, TextInput } from '@/components/business/form';

const ininitialValues = {
  email: '',
  password: ''
}

export interface SignInFormProps {
  onSignIn: FormProps['onSubmit'];
}

export const SignInForm: FC<SignInFormProps> = ({ onSignIn }) => (
  <Form
    initialValues={ininitialValues}
    onSubmit={onSignIn}
  >
    <FormError className="mb-4" />
    <TextInput
      name="email"
      label="Email"
    />
    <TextInput
      secureTextEntry
      name="password"
      label="Password"
    />
    <SubmitButton>Log In</SubmitButton>
  </Form>
);