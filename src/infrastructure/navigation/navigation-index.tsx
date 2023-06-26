import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticationContext} from '../services/authentication/authentication-provider';
import Accounts from './accounts';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigation from './AppNavigation';

export default function Navigation(): React.JSX.Element {
  const {isAuthenticated} = useContext(AuthenticationContext);

  return (
    <PaperProvider>
      <NavigationContainer>
        {isAuthenticated ? <AppNavigation /> : <Accounts />}
      </NavigationContainer>
    </PaperProvider>
  );
}
