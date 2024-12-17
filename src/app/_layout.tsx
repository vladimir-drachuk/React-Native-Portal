import { Stack } from 'expo-router';

import { Providers } from '@/components/business/providers';

import 'react-native-reanimated';
import '../styles/global.css';

export default () => (
  <Providers>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(root)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  </Providers>
);
