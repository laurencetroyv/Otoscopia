import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/accounts/screens/sign-in';
import ForgotPassword from '../../features/accounts/screens/forgot-password';

const Stack = createNativeStackNavigator();

function SignInComponent() {
  return <SignIn />;
}

function ForgotPasswordComponent() {
  return <ForgotPassword />;
}

export default function AccountsNavigation(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name="Sign In" component={SignInComponent} />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPasswordComponent}
      />
    </Stack.Navigator>
  );
}
