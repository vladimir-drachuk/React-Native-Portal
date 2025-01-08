import { Stack } from "expo-router";

import { Routes } from '@/components/business/routing';

export default () => (
  <Routes screenOptions={{ headerShown: false }}>
    <Stack.Screen name="sign-in" />
    <Stack.Screen name="sign-up" />
  </Routes>
);
