import React, { useState, useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {
  Button,
  Divider,
  HelperText,
  Text,
  TextInput,
} from 'react-native-paper';
import Container from '../../../components/container';
import Animation from '../../../assets/sign-in-animation.json';
import { AuthenticationContext } from '../../../services/authentication-context';
import Loading from '../../../components/loading';
import { useNavigation } from '@react-navigation/native';

export default function SignIn(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isSecure, setIsSecure] = useState(true);

  const { isLoading, loggedInRequest, loggedInRequestError } = useContext(
    AuthenticationContext,
  );

  const navigation = useNavigation();

  const onClick = () => {
    const emailChecker = !email || emailError;
    const passwordChecker = !password || passwordError;

    if (emailChecker) {
      setEmailError(emailChecker);
    }

    if (passwordChecker) {
      setPasswordError(passwordChecker);
    }

    if (!(emailChecker && passwordChecker)) {
      loggedInRequest(email, password);
    }
  };

  return (
    <Container styles="space-y-4 justify-center">
      <AnimatedLottieView source={Animation} autoPlay loop className="w-full" />

      <Divider />

      <View>
        <Text className="text-3xl font-bold text-primary">Hello</Text>
        <Text className="text-3xl font-bold">Login Now</Text>
        <Text className="py-2 w-3/4">
          Please fill in the form to create a new account and continue
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

      <View>
        <TextInput
          mode="outlined"
          label="Password"
          autoComplete="password"
          autoCapitalize="none"
          inputMode="text"
          onChangeText={setPassword}
          secureTextEntry={isSecure}
          onEndEditing={() => {
            const passwordChecker = password.length < 8;
            setPasswordError(passwordChecker);
          }}
          right={
            <TextInput.Icon
              icon={isSecure ? 'eye' : 'eye-outline'}
              forceTextInputFocus={false}
              onPress={() => setIsSecure(!isSecure)}
            />
          }
          error={passwordError}
        />
        {passwordError && (
          <HelperText type="error" visible>
            Invalid password.
          </HelperText>
        )}
      </View>

      <Loading visible={isLoading} />

      {loggedInRequestError && (
        <HelperText type="error">{loggedInRequestError}</HelperText>
      )}

      <TouchableOpacity onPress={onClick}>
        <Button mode="contained">Sign In</Button>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text className="text-center">
          Don&lsquo;t have have an account?{' '}
          <Text className="font-bold">Click Here</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
        <Text className="text-center">
          Forgot Password? <Text className="font-bold">Click Here</Text>
        </Text>
      </TouchableOpacity>
    </Container>
  );
}
