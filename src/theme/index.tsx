import { FC, useEffect } from 'react';
import { DefaultTheme, ThemeProvider as RNThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { BaseComponentProps } from '@/types/props';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const ThemeProvider: FC<BaseComponentProps> = ({ children }) => {
  const [loaded] = useFonts({
    PrimaryMedium: require("../assets/fonts/EtelkaMedium.otf"),
    PrimaryText: require("../assets/fonts/EtelkaText.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RNThemeProvider value={DefaultTheme}>{children}</RNThemeProvider>;
}
  