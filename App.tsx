import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black, useFonts
} from '@expo-google-fonts/inter';
import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';

import { Background } from './src/components/Background';

import './src/Services/notificationConfig';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { theme } from './src/theme';
import { getPushNotificationToken } from './src/Services/getPushNotificationToken';

export default function App() {

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      if(getNotificationListener.current && responseNotificationListener.current){
        Notifications.removeNotificationSubscription(getNotificationListener.current);
        Notifications.removeNotificationSubscription(responseNotificationListener.current);
      }
    }
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading size={36} />}
      </Background>
    </ThemeProvider>
  );
}
