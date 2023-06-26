import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../../features/Accounts/screens/sign-in';
import SignUp from '../../features/Accounts/screens/Sign-Up';
import VerificationCode from '../../features/Accounts/screens/Verification-Code';
import Password from '../../features/Accounts/screens/Password';
import UserInformation from '../../features/Accounts/screens/User-Information';
import ForgotPassword from '../../features/Accounts/screens/ForgotPassword';
import Gender from '../../features/Accounts/screens/Gender';
import Camera from '../../features/Accounts/screens/Camera';
import SetProfile from '../../features/Accounts/screens/SetProfile';
import Welcome from '../../features/Accounts/screens/Welcome';

const Stack = createNativeStackNavigator();

function SignInComponent(): React.JSX.Element {
  return <SignIn />;
}

function SignUpComponent(): React.JSX.Element {
  return <SignUp />;
}

function VerificationCodeComponent(): React.JSX.Element {
  return <VerificationCode />;
}

function PasswordComponent(): React.JSX.Element {
  return <Password />;
}

function UserInformationComponent(): React.JSX.Element {
  return <UserInformation />;
}

function ForgotPasswordComponent(): React.JSX.Element {
  return <ForgotPassword />;
}

function GenderComponent(): React.JSX.Element {
  return <Gender />;
}

function SetProfileComponent(): React.JSX.Element {
  return <SetProfile />;
}

function CameraComponent(): React.JSX.Element {
  return <Camera />;
}

function WelcomeComponent(): React.JSX.Element {
  return <Welcome />;
}

export default function Accounts(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name="Sign In" component={SignInComponent} />
      <Stack.Screen name="Sign Up" component={SignUpComponent} />
      <Stack.Screen
        name="Verification Code"
        component={VerificationCodeComponent}
      />
      <Stack.Screen name="Password" component={PasswordComponent} />
      <Stack.Screen
        name="User Information"
        component={UserInformationComponent}
      />
      <Stack.Screen name="Gender" component={GenderComponent} />
      <Stack.Screen name="Set Profile" component={SetProfileComponent} />
      <Stack.Screen name="Camera" component={CameraComponent} />
      <Stack.Screen name="Welcome" component={WelcomeComponent} />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPasswordComponent}
      />
    </Stack.Navigator>
  );
}
