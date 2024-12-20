import { FC } from 'react';

import { WithoutProps } from '@/types';
import { useAuth } from '@/auth';
import { SignUpForm } from './sign-up-form';
import { Link } from '@/components/atomic/link';

import { SignContainer } from '@/components/layouts/sign-container';

type SignUpProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const SignUpScreen: FC<WithoutProps> = () => {
  const { signUp } = useAuth();
  
  const handleSignUp = async (fields: Record<string, unknown>) => {
    const { firstName, lastName, password, email } = fields as SignUpProps;

    await signUp({ firstName, lastName, password, email });
  }

  return (
    <SignContainer
      title="Sign Up"
      form={<SignUpForm onSignUp={handleSignUp} />}
      bottomLink={(
        <Link
          replace
          href="/(auth)/sign-in"
        >
          Already have an account?
        </Link>
      )}
    />
  );
}