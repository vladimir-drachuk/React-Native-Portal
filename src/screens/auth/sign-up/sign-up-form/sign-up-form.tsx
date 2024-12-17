import { FC } from 'react';

import { WithoutProps } from '@/types';
import { Form, SubmitButton, TextInput } from '@/components/business/form';

export const SignUpForm: FC<WithoutProps> = () => (
  <Form initialValues={{ firstname: '' }} onSubmit={(v) => { console.log(v) }}>
    <TextInput
      name="firstname"
      label="First Name"
    />
    <SubmitButton>Submit</SubmitButton>
  </Form>
);