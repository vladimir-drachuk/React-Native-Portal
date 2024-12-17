import { FC } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { BaseComponentProps } from '@/types';

const queryClient = new QueryClient();

export const QueryProvider: FC<BaseComponentProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export * from './user';
