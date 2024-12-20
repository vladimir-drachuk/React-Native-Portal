import { FC } from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { typography } from '@/theme/assets/typographies';

export interface TextProps extends RNTextProps {
  variant?: keyof typeof typography;
};

export const Text: FC<TextProps> = ({ variant = 'body2', style, ...props }) => (
  <RNText
    {...props}
    style={{
      ...style as Record<string, string>,
      ...typography[variant]
    }}
  />
);