import { FC } from 'react';
import { Dimensions } from 'react-native'
import RNRCCarousel from 'react-native-reanimated-carousel';

import { Text } from '@/components/atomic/text';
import { View } from '@/components/atomic/view';

export const Carousel: FC = () => {
  const { width } = Dimensions.get('window');

  return (
    <View className="flex-1">
      <RNRCCarousel
        loop
        scrollAnimationDuration={1000}
        width={width}
        data={['first', 'second', 'third']}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  )
}