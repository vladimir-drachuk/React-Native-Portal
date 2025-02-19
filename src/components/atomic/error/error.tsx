import { FC } from 'react';

import { DefaultViewProps, View } from '@/components/atomic/view';
import { Text } from '@/components/atomic/text';
import { Icon } from '@/components/atomic/icon';

export interface ErrorProps extends DefaultViewProps {}

export const Error: FC<ErrorProps > = ({ children, className, ...props }) => (
  <View
    {...props}
    className={`flex flex-row items-center gap-2 rounded-[4px] border border-brand-100 bg-primary-200 p-2 ${className}`}
  >
    <Icon
      type="close-circle-outline"
      className="text-brand-100"
      size="small"
    />
    <Text className="text-brand-100">
      {children}
    </Text>
  </View>
)