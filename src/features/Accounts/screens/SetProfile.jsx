import { View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../../components/Screen-Container';
import Header from '../components/Header';
import Button from '../../../components/Button';
import Illustration from '../../../assets/cat-animation.json';

export default function SetProfile() {
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <View className="flex-1 justify-center p-4 space-y-4">
        <View>
          <Header
            title="Select a profile"
            subtitle="You can select photo from one of your gallery or take a picture"
          />
        </View>

        <View>
          <Divider />
        </View>

        <View>
          <AnimatedLottieView
            source={Illustration}
            autoPlay
            loop
            className="w-full"
          />
        </View>

        <Button text="Continue" onPress={() => navigation.navigate('Camera')} />
      </View>
    </ScreenContainer>
  );
}
