import { FC } from 'react';

import { WithoutProps } from '@/types';
import { useAuth } from '@/auth';
import { SignInForm } from './sign-in-form';
import { Link } from '@/components/atomic/link';

import { SignContainer } from '@/components/layouts/sign-container';
import { FirebaseError } from 'firebase/app';
import { FirebaseErrorCodes } from '@/firebase/constants/error-codes';
import { FormikHelpers } from 'formik';
import { FormFields } from '@/components/business/form';

type SignInProps = {
  email: string;
  password: string;
}

export const SignInScreen: FC<WithoutProps> = () => {
  const { logIn } = useAuth();
  
  const handleSignIn = async (fields: Record<string, unknown>, { setFieldError }: FormikHelpers<Record<string, unknown>>) => {
    const { password, email } = fields as SignInProps;
  
    try {
      await logIn({ password, email });
    } catch (err) {
      const { code } = err as FirebaseError;
      
      if (code === FirebaseErrorCodes.INVALID_CREDENTIALS) {
        setFieldError(FormFields.COMMON, 'You entered wrong credentials or your password has expired.')
      }
    }
  }

  return (
    <SignContainer
      title="Log in"
      form={<SignInForm onSignIn={handleSignIn} />}
      bottomLink={(
        <Link
          replace
          href="/(auth)/sign-up"
        >
          Don’t have an account?
        </Link>
      )}
    />
  );
}