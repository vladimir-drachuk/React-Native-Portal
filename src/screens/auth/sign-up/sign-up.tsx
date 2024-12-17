import { FC } from 'react';

import { WithoutProps } from '@/types';
import { useAuth } from '@/auth';
import { View } from '@/components/atomic/view';
import { Text } from '@/components/atomic/text';
import { SignUpForm } from './sign-up-form';

export const SignUpScreen: FC<WithoutProps> = () => {
  const { signUp, isLoading } = useAuth();
  
  const handleSignUp = async () => {
    // await signUp('Denis2@gmail.com', '123456789');
  }

  return (
    <View className="flex justify-center items-center h-dvh">
      <View className="max-w-64 w-full">
        <Text>Sign Up</Text>
        <SignUpForm />
      </View>
    </View>
  );
}