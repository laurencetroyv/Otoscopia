import { View } from 'react-native';
import React, { useState } from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../../components/Screen-Container';
import Illustration from '../../../assets/user-information-animation.json';
import Header from '../components/Header';
import TextInput from '../../../components/Text-Input';
import Button from '../../../components/Button';

export default function UserInformation() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);

  const [middleName, setMiddleName] = useState('');
  const [middleNameError, setMiddleNameError] = useState(false);

  const [familyName, setFamilyName] = useState('');
  const [familyNameError, setFamilyNameError] = useState(false);

  const [suffixName, setSuffixName] = useState('');

  return (
    <ScreenContainer>
      <View className="flex-1 justify-center p-4 space-y-4">
        <View className="items-center">
          <AnimatedLottieView
            source={Illustration}
            autoPlay
            loop
            className="w-3/4"
          />
        </View>

        <View>
          <Header
            title="Set your information"
            subtitle="Please enter your information"
          />
        </View>

        <View>
          <TextInput
            label="Username"
            onChangeText={setUsername}
            onEndEditing={() =>
              username.length !== 0
                ? setUsernameError(false)
                : setUsernameError(true)
            }
            placeholder="Prince"
            textContentType="username"
            showHelper={usernameError}
            helperMessage="Username Error"
          />
        </View>

        <View>
          <TextInput
            label="First Name"
            onChangeText={setFirstName}
            onEndEditing={() =>
              firstName.length !== 0
                ? setFirstNameError(false)
                : setFirstNameError(true)
            }
            placeholder="Laurence"
            textContentType="givenName"
            showHelper={firstNameError}
            helperMessage="First Name Error"
          />
        </View>

        <View>
          <TextInput
            label="Middle Name"
            onChangeText={setMiddleName}
            onEndEditing={() =>
              middleName.length !== 0
                ? setMiddleNameError(false)
                : setMiddleNameError(true)
            }
            placeholder="Avila"
            textContentType="middleName"
            showHelper={middleNameError}
            helperMessage="Middle Name Error"
          />
        </View>

        <View>
          <TextInput
            label="Family Name"
            onChangeText={setFamilyName}
            onEndEditing={() =>
              familyName.length !== 0
                ? setFamilyNameError(false)
                : setFamilyNameError(true)
            }
            placeholder="Macabato"
            textContentType="familyName"
            showHelper={familyNameError}
            helperMessage="Family Name Error"
          />
        </View>

        <View>
          <TextInput
            label="Name Suffix"
            onChangeText={setSuffixName}
            onEndEditing={() => null}
            placeholder="Jr."
            textContentType="nameSuffix"
            helperMessage="Name Suffix Error"
          />
        </View>

        <View>
          <Button
            text="Continue"
            onPress={() => navigation.navigate('Gender')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
