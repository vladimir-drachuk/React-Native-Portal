import { FC } from 'react';

import { View } from '@/components/atomic/view';
import { Text } from '@/components/atomic/text';
import { HiQoLogo } from '@/components/layouts/hiqo-logo';


export const GlobalPreloader: FC = () => (
  <View className="flex flex-grow justify-center items-center">
    <HiQoLogo className="mb-6 mx-auto" />
    <Text variant="h4">
      HiQo Mobile Portal
    </Text>
  </View>
);