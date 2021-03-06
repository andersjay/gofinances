import React from 'react';
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>

      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"

      />
      <Dashboard />
    </ThemeProvider>

  );
}
