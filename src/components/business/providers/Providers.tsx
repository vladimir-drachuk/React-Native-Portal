import { FC } from 'react';

import { BaseComponentProps } from '@/types/props';
import { ThemeProvider } from '@/theme';
import { QueryProvider } from '@/rest/query';
import { AuthProvider } from '@/auth';

export const Providers: FC<BaseComponentProps> = ({ children }) => (
  <ThemeProvider>
    <QueryProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryProvider>
  </ThemeProvider>
);