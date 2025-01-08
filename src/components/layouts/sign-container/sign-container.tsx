import { FC, ReactNode } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

import { View } from '@/components/atomic/view';
import { Text } from '@/components/atomic/text';
import { HiQoLogo } from '@/components/layouts/hiqo-logo';


export interface SignContainerProps {
  title: string;
  form: ReactNode;
  bottomLink: ReactNode;
}

export const SignContainer: FC<SignContainerProps> = ({ title, form, bottomLink }) => (
  <SafeAreaView className="flex flex-grow justify-center items-center p-2">
    <View className="max-w-96 w-full mb-4">  
      <HiQoLogo
        className="mb-6 mx-auto"
        style={{ width: 72, height: 53 }}
      />
      <Text
        variant="h4"
        className="text-center mb-6"
      >
        {title}
      </Text>
      {form}
      <View className="flex items-center mt-4">
        {bottomLink}
      </View>     
    </View>
  </SafeAreaView>
);
