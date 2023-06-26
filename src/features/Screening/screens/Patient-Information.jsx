import { Pressable, View } from 'react-native';
import React, { useState } from 'react';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import TextInput from '../../../components/Text-Input';
import ScreenContainer from '../../../components/Screen-Container';
import Button from '../../../components/Button';
import Man from '../../../assets/male.json';
import Woman from '../../../assets/female.json';
import PhoneNumberInput from '../../Accounts/components/Phone-Number-Input';

export default function PatientInformation() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);

  const [middleName, setMiddleName] = useState('');
  const [middleNameError, setMiddleNameError] = useState(false);

  const [familyName, setFamilyName] = useState('');
  const [familyNameError, setFamilyNameError] = useState(false);

  const [suffixName, setSuffixName] = useState('');

  const [selected, setSelected] = useState();

  const [phoneNumber, setPhoneNumber] = useState(0);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  return (
    <ScreenContainer>
      <View className="p-4 flex-1 bg-light-surface rounded-t-3xl mt-6 space-y-4">
        <View className="flex-row px-8 justify-center items-center">
          <View className="bg-primary rounded-full w-4 h-4" />

          <View className="bg-primary h-1 grow" />

          <View className="border border-primary rounded-full w-2 h-2" />

          <View className="bg-primary h-1 grow" />

          <View className="border border-primary rounded-full w-2 h-2" />
        </View>

        <View>
          <Text className="text-lg font-medium text-center">
            Patient Information
          </Text>
        </View>

        <View>
          <Text className="text-center">Patient Information</Text>
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

        <View className="flex-row space-x-4 items-center">
          <Pressable
            className={`flex-1 ${
              selected === 'Female'
                ? 'border dark:border-dark-surface rounded-md'
                : null
            }`}
            onPress={() => setSelected('Female')}>
            <AnimatedLottieView source={Woman} className="w-full" />
          </Pressable>

          <Pressable
            className={`flex-1 ${
              selected === 'Male'
                ? 'border dark:border-dark-surface rounded-md'
                : null
            }`}
            onPress={() => setSelected('Male')}>
            <AnimatedLottieView source={Man} className="w-full" />
          </Pressable>
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
          <Button
            text="Continue"
            onPress={() => navigation.navigate('Left Ear Camera')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
