import { FC, ReactNode } from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  type TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';

import { Text } from '@/components/atomic/text';

export interface ButtonProps extends RNTouchableOpacityProps {
  variant?: 'contained' | 'outlined';
  color?: 'brand' | 'unset';
  icon?: ReactNode;
};

const getStyles = (variant: ButtonProps['variant'], color: ButtonProps['color']) => {
  const styles = { button: '', text: '' };

  switch(true) {
    case color === 'brand':
      styles.button += variant === 'contained'
        ? 'bg-brand-100'
        : 'text-transparent border border-brand-100';
      styles.text += variant === 'contained' ? 'text-white' : 'text-brand-100';
      break;
    case color === 'unset':
      styles.button += variant === 'contained'
        ? 'bg-secondary-700'
        : 'text-transparent border border-secondary-300';
      styles.text += variant === 'contained' ? 'text-white' : 'text-secondary-700';
      break;
    default:
      break;
  }

  return styles;
}

export const Button: FC<ButtonProps> = ({
  variant = 'contained',
  color = 'brand',
  icon,
  disabled,
  className,
  children,
  ...props
}) => {
  const styles = getStyles(variant, color);

  return (
    <RNTouchableOpacity
      {...props}
      disabled={disabled}
      className={`flex flex-row items-center justify-center gap-2 rounded px-4 py-2 text-white ${disabled &&'opacity-40'} ${styles.button} ${className}`}
    >
      {icon}
      <Text className={`uppercase ${styles.text}`}>
        {children}
      </Text> 
    </RNTouchableOpacity>
  );
};