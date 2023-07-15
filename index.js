/**
 * @format
 */

import React, { useState } from 'react';
import { AppRegistry, useColorScheme, StatusBar } from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import App from './App.tsx';
import { name as appName } from './app.json';
import Splashscreen from './src/features/Splashscreen';
import colors from './src/infrastructure/themes/colors';

function Main() {
  const [initializing, setInitializing] = useState(true);
  const colorScheme = useColorScheme() === 'dark';

  setTimeout(() => {
    setInitializing(false);
  }, 2500);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      {initializing ? <Splashscreen /> : <App />}
      <StatusBar
        backgroundColor={
          colorScheme ? colors.background.dark : colors.background.light
        }
        barStyle={colorScheme ? 'light-content' : 'dark-content'}
      />
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
