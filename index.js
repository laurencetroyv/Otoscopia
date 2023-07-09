/**
 * @format
 */

import React, { useState } from 'react';
import { AppRegistry } from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import App from './App.tsx';
import { name as appName } from './app.json';
import Splashscreen from './src/features/Splashscreen';

function Main() {
  const [initializing, setInitializing] = useState(true);

  setTimeout(() => {
    setInitializing(false);
  }, 2500);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      {initializing ? <Splashscreen /> : <App />}
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
