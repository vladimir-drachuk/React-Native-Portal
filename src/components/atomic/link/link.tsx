import { FC } from 'react';
import { Link as ERLink, LinkProps as ERLinkProps } from 'expo-router';

import { Text } from '@/components/atomic/text';

export interface LinkProps extends ERLinkProps {}

export const Link: FC<LinkProps> = ({ children, ...props }) => (
  <ERLink {...props}>
    <Text
      variant="subtitle2"
      className="underline"
    >
      {children}
    </Text>
  </ERLink>
)