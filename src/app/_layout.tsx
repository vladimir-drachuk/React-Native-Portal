import { Stack } from 'expo-router';

import { Providers } from '@/components/business/providers';
import { Routes } from '@/components/business/routing';

import 'react-native-reanimated';
import '../styles/global.css';

export default () => (
  <Providers>
    <Routes screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(root)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="+not-found" />
    </Routes>
  </Providers>
);
