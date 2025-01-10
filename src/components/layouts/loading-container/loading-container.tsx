import { BaseComponentProps } from '@/types';
import { FC } from 'react';
import { GlobalPreloader } from './global-preloader';

export interface LoadingContainerProps extends BaseComponentProps {
  isLoading?: boolean;
}

export const LoadingContainer: FC<LoadingContainerProps> = ({ isLoading, children }) =>
  isLoading
    ? <GlobalPreloader />
    : children;