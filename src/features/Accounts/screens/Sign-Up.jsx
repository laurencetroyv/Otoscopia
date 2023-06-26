import { TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { Checkbox, Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../../components/Screen-Container';
import AnimatedIllustration from '../../../assets/sign-up-illustration.json';
import EmailInput from '../components/Email-Input';
import PressableText from '../../../components/Pressable-Text';
import StyledButton from '../../../components/Button';
import Policy from '../components/Policy';
import Header from '../components/Header';
import PhoneNumberInput from '../components/Phone-Number-Input';
import { AuthenticationContext } from '../../../services/authentication/Authentication-Context';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [phoneNumber, setPhoneNumber] = React.useState(0);
  const [phoneNumberError, setPhoneNumberError] = React.useState(false);

  const [checkbox, setCheckbox] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const [modal, setModal] = useState(false);

  const navigation = useNavigation();

  const { codeRequest, codeRequestError } = useContext(AuthenticationContext);

  const signUpFunction = () => {
    if (email.length === 0) {
      setEmailError(true);
    }

    if (phoneNumber.toString().length <= 10) {
      setPhoneNumberError(true);
    }

    if (checkbox === false) {
      setCheckboxError(true);
    }

    if (
      phoneNumberError === false &&
      emailError === false &&
      checkbox === true
    ) {
      codeRequest(phoneNumber);
      setTimeout(() => {
        if (!!codeRequestError === false) {
          navigation.navigate('Verification Code', {
            email,
            phoneNumber,
          });
        }
      }, 2000);
    }
  };

  return (
    <ScreenContainer enableKeyboardAvoidingView scrollEnabled>
      <View className="flex-1 justify-center p-4 space-y-4">
        <AnimatedLottieView
          source={AnimatedIllustration}
          autoPlay
          loop
          className="w-full"
        />

        <View>
          <Divider />
        </View>

        <View>
          <Header
            title="Hello"
            secondTitle="Create an account"
            thirdTitle="now."
            subtitle="Please fill in the form to create a new account and continue"
          />
        </View>

        <View>
          <PhoneNumberInput
            onChangeText={setPhoneNumber}
            onEndEditing={() =>
              phoneNumber.length !== 11
                ? setPhoneNumberError(true)
                : setPhoneNumberError(false)
            }
            showHelper={phoneNumberError}
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
          <Policy visible={modal} onDismiss={() => setModal(false)} />

          <View className="flex-row w-[90%] items-center">
            <Checkbox
              status={checkbox ? 'checked' : 'unchecked'}
              onPress={() => {
                setCheckboxError(false);
                setCheckbox(!checkbox);
              }}
              uncheckedColor={checkboxError ? 'red' : undefined}
            />

            <TouchableOpacity onPress={() => setModal(true)}>
              <Text>
                <Text>I agree to the </Text>
                <Text className="font-bold">terms & conditions </Text>
                <Text>and </Text>
                <Text className="font-bold">privacy policy</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <PressableText
            text="Already have an account?"
            strongText=" Click Here"
            onPress={() => navigation.navigate('Sign In')}
            center
          />
        </View>

        <View>
          <StyledButton text="Sign Up" onPress={signUpFunction} />
        </View>
      </View>
    </ScreenContainer>
  );
}
