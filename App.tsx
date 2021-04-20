import React from 'react';
import AppLoading from 'expo-app-loading';
import { Confirmation } from './src/pages/Confirmation';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';



export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <Confirmation />
  );
}