import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import { Divider } from 'react-native-paper';
import ScreenContainer from '../../../components/Screen-Container';
import Header from '../components/Header';
import Illustration from '../../../assets/gender-animation.json';
import Man from '../../../assets/male.json';
import Woman from '../../../assets/female.json';
import Button from '../../../components/Button';

export default function Gender() {
  const navigation = useNavigation();

  const [selected, setSelected] = useState();

  const continueFunction = () => {
    navigation.navigate('Set Profile');
  };

  return (
    <ScreenContainer>
      <View className="flex-1 p-4 pb-16 justify-center space-y-8">
        <View>
          <AnimatedLottieView
            source={Illustration}
            loop
            autoPlay
            className="w-full"
          />
        </View>

        <View>
          <Divider />
        </View>

        <View>
          <Header
            title="What's your gender?"
            subtitle="To give you a better experience, we need to know your Gender."
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
          <Button text="Continue" onPress={continueFunction} />
        </View>
      </View>
    </ScreenContainer>
  );
}
