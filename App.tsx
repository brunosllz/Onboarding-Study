import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home';

import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [ fontloaded ] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold
  })

  if(!fontloaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar style='light' translucent/>
      <Home/>
    </>
  );
}