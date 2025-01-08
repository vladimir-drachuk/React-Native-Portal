import { ComponentType, useLayoutEffect } from 'react';
import { router } from 'expo-router';

import { useAuth } from './auth-context';

type AuthScreenType = 'authorization-screen' | 'private-screen';

export const withAuthorization = <T extends Record<string, unknown>>(
  Component: ComponentType<T>, type: AuthScreenType = 'private-screen',
) => (props: T) => {
  const { isInitialized, user } = useAuth();

  useLayoutEffect(() => {
    if (!isInitialized) return;
    
    if (isInitialized && type === 'authorization-screen' && user) {
      router.replace('/');
    }

    if (isInitialized && type === 'private-screen' && !user) {
      router.replace('/(auth)/sign-in');
    }
  }, [isInitialized, user]);

  return <Component {...props} />
};