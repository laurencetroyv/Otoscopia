import { TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import {
  Divider,
  Text,
  TextInput,
  HelperText,
  Checkbox,
  Button,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CountryFlag from 'react-native-country-flag';
import AnimatedLottieView from 'lottie-react-native';
import Container from '../../../components/container';
import Animation from '../../../assets/sign-up-animation.json';

export default function SignUp() {
  const [number, setNumber] = useState(0);
  const [numberError, setNumberError] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [checked, setChecked] = useState(false);

  const navigation = useNavigation();

  return (
    <Container className="justify-center space-y-4">
      <AnimatedLottieView source={Animation} autoPlay loop className="w-full" />

      <Divider />

      <View className="w-3/4">
        <Text className="text-3xl font-bold text-primary">Hello</Text>
        <Text className="text-3xl font-bold">Create account now.</Text>
        <Text className="py-2">
          Please fill in the form to create a new account and continue.
        </Text>
      </View>

      <View>
        <TextInput
          mode="outlined"
          label="Phone Number"
          autoCapitalize="none"
          autoComplete="tel"
          inputMode="numeric"
          keyboardType="email-address"
          onChangeText={setEmail}
          onEndEditing={() => {
            const numberChecker = number.toString().length < 11;
            setNumberError(numberChecker);
          }}
          left={<Text>+63</Text>}
          right={
            <TextInput.Icon
              icon={({ size }: { size: number }) => (
                <CountryFlag isoCode="ph" size={size} className="rounded-sm" />
              )}
              forceTextInputFocus={false}
            />
          }
          placeholder="09"
          maxLength={11}
          error={numberError}
        />

        {emailError && (
          <HelperText type="error" visible>
            Invalid email address must be a valid deped account.
          </HelperText>
        )}
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

      <View className="flex-row justify-center w-11/12">
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
        />

        <TouchableOpacity onPress={() => {}}>
          <Text>I agree to the terms & conditions and privacy policy</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Button mode="contained">Sign Up</Button>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
        <Text className="text-center">
          Already have an account? <Text className="font-bold">Click here</Text>
        </Text>
      </TouchableOpacity>
    </Container>
  );
}
