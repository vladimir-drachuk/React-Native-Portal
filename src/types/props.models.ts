import { ReactNode } from 'react';

export interface WithoutProps extends Record<string, never> {}

export interface BaseComponentProps {
  children: ReactNode
}
