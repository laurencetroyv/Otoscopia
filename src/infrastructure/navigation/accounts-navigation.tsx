import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/accounts/screens/sign-in';
import ForgotPassword from '../../features/accounts/screens/forgot-password';
import SignUp from '../../features/accounts/screens/sign-up';

const Stack = createNativeStackNavigator();

function SignInComponent() {
  return <SignIn />;
}

function SignUpComponent() {
  return <SignUp />;
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
      <Stack.Screen name="Sign Up" component={SignUpComponent} />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPasswordComponent}
      />
    </Stack.Navigator>
  );
}
