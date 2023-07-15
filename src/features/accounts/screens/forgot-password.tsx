import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Button, HelperText, TextInput } from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';
import Container from '../../../components/container';
import Animation from '../../../assets/password-animation.json';

export default function ForgotPassword(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const onCLick = () => {
    const emailChecker = !email || emailError;

    if (emailChecker) {
      setEmailError(emailChecker);
    }

    if (!emailChecker) {
      //TODO send link to reset password.
    }
  };

  return (
    <Container styles="space-y-4 justify-center mb-16">
      <AnimatedLottieView source={Animation} loop autoPlay className="w-full" />

      <View>
        <Text className="text-3xl font-bold text-primary">Forgot Password</Text>
        <Text className="py-2 w-3/4">
          Ohh noo, you forgot your password? Please fill in the form below to
          reset your password.
        </Text>
      </View>

      <View>
        <TextInput
          mode="outlined"
          label="Email address"
          autoCapitalize="none"
          autoComplete="email"
          inputMode="email"
          keyboardType="email-address"
          onChangeText={setEmail}
          onEndEditing={() => {
            const emailChecker = !email.includes('@deped.edu.ph');
            setEmailError(emailChecker);
          }}
          right={<TextInput.Icon icon="email" forceTextInputFocus={false} />}
          placeholder="@deped.edu.ph"
          error={emailError}
        />

        {emailError && (
          <HelperText type="error" visible>
            Invalid email address must be a valid deped account.
          </HelperText>
        )}
      </View>

      <TouchableOpacity onPress={onCLick}>
        <Button mode="contained">Reset Password</Button>
      </TouchableOpacity>
    </Container>
  );
}
