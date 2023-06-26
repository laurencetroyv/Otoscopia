import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';
import ScreenContainer from '../../../components/Screen-Container';
import Header from '../components/Header';
import PasswordInput from '../components/Password-Input';
import Illustration from '../../../assets/password-animation.json';
import Button from '../../../components/Button';

export default function Password() {
  const { params: email } = useRoute();

  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordSecure, setPasswordSecure] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordSecure, setConfirmPasswordSecure] = useState(true);

  const Submit = () => {
    if (password.length >= 8 && confirmPasswordError === false) {
      navigation.navigate('User Information');
    }
  };

  return (
    <ScreenContainer>
      <View className="flex-1 p-4 justify-center space-y-4">
        <View>
          <AnimatedLottieView
            source={Illustration}
            autoPlay
            loop
            className="w-full"
          />
        </View>

        <View>
          <Header
            title="Set your password"
            subtitle="Please enter your password"
          />
        </View>

        <View>
          <PasswordInput
            onChangeText={setPassword}
            onPress={() => setPasswordSecure(!passwordSecure)}
            onEndEditing={() =>
              !(password.length >= 8)
                ? setPasswordError(true)
                : setPasswordError(false)
            }
            secureTextEntry={passwordSecure}
            showHelper={passwordError}
          />
        </View>

        <View>
          <PasswordInput
            label="Verify Password"
            onChangeText={setConfirmPassword}
            onPress={() => setConfirmPasswordSecure(!confirmPasswordSecure)}
            onEndEditing={() =>
              !(confirmPassword === password)
                ? setConfirmPasswordError(true)
                : setConfirmPasswordError(false)
            }
            secureTextEntry={confirmPasswordSecure}
            showHelper={confirmPasswordError}
            helperMessage="Password does not match"
          />
        </View>

        <View>
          <Text>At least 8 characters long</Text>
          <Text>Both uppercase and lowercase letter</Text>
          <Text>At least one number or symbol</Text>
        </View>

        <View>
          <Button text="Submit" onPress={Submit} />
        </View>
      </View>
    </ScreenContainer>
  );
}
