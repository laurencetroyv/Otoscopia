import { View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Avatar, Divider } from 'react-native-paper';
import ScreenContainer from '../../../components/Screen-Container';
import Header from '../components/Header';
import Button from '../../../components/Button';

export default function Welcome() {
  const { params: capturedImage } = useRoute();
  return (
    <ScreenContainer>
      <View className="flex-1 p-4 justify-center space-y-4">
        <View>
          <Header title="Welcome!" subtitle="You can now continue!" />
        </View>

        <View>
          <Divider />
        </View>

        <View className="items-center">
          <Avatar.Image size={200} source={{ uri: capturedImage }} />
        </View>

        <View>
          <Button text="Continue" onPress={() => null} />
        </View>
      </View>
    </ScreenContainer>
  );
}
