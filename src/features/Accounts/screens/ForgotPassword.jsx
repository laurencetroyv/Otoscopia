import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import ScreenContainer from '../../../components/Screen-Container';
import Button from '../../../components/Button';
import EmailInput from '../components/Email-Input';
import Header from '../components/Header';
import PressableText from '../../../components/Pressable-Text';
import Illustration from '../../../assets/forgot-password-animation.json';

export default function ForgotPassword() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const Continue = () => {
    if (email.length >= 0 && email.includes('@deped.edu.ph')) {
      navigation.navigate('Verification Code', { email });
    } else {
      setEmailError(true);
    }
  };

  return (
    <ScreenContainer>
      <View className="flex-1 p-4 space-y-6">
        <View className="items-center">
          <AnimatedLottieView
            source={Illustration}
            loop
            autoPlay
            className="w-3/4"
          />
        </View>

        <View>
          <Divider />
        </View>

        <View className="pt-8">
          <Header
            title="Forgot Password"
            subtitle="Ohh noo you forgot your password? Please fill in the form to reset and continue."
          />
        </View>

        <View>
          <EmailInput
            onChangeText={setEmail}
            onEndEditing={() =>
              !email.includes('@deped.edu.ph')
                ? setEmailError(true)
                : setEmailError(false)
            }
            showHelper={emailError}
          />
        </View>

        <View>
          <Button text="Continue" onPress={Continue} />
        </View>

        <View>
          <PressableText text="Back to Login" center />
        </View>
      </View>
    </ScreenContainer>
  );
}
