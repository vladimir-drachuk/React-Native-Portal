
import { FC } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import { View } from '@/components/atomic/view';
import { Text } from '@/components/atomic/text';
import { useAuth } from '@/auth';

export const DrawerContent: FC<DrawerContentComponentProps> = (props: DrawerContentComponentProps) => {
  const { logOut } = useAuth()

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View className="border-secondary-100 border-b px-4 pb-4 pt-0 flex flex-row justify-between items-center">
          <View className="flex flex-row items-center gap-4">
            <Text className="text-lg font-PrimaryText">
              name
            </Text>
          </View>
          <MaterialIcons
            size={24}
            name="logout"
            onPress={logOut}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}