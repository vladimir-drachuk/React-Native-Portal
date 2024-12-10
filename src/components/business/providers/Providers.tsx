import { FC } from 'react';

import { BaseComponentProps } from '@/types/props';
import { ThemeProvider } from '@/theme';
import { QueryProvider } from '@/query';
import { AuthProvider } from '@/auth';

export const Providers: FC<BaseComponentProps> = ({ children }) => (
  <ThemeProvider>
    <AuthProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </AuthProvider>
  </ThemeProvider>
);