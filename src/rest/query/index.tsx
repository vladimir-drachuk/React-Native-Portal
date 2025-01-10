import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { BaseComponentProps } from '@/types';

const queryClient = new QueryClient();

export const QueryProvider: FC<BaseComponentProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

export * from './user';
export * from './news';
