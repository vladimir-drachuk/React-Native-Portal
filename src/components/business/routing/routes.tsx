import { FC, ComponentProps } from 'react';
import { Stack } from 'expo-router';

import { useAuth } from '@/auth';
import { LoadingContainer } from '@/components/layouts/loading-container';

export interface RoutesProps extends ComponentProps<typeof Stack> {}

export const Routes: FC<RoutesProps> = ({ children, ...props }) => {
  const { isInitialized } = useAuth();

  return (
    <LoadingContainer isLoading={!isInitialized}>
      <Stack {...props}>{children}</Stack>
    </LoadingContainer>
  );
};