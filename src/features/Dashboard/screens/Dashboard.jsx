import { View, Text } from 'react-native';
import React from 'react';
import ScreenContainer from '../../../components/Screen-Container';

export default function Dashboard() {
  return (
    <ScreenContainer>
      <View className="flex-1 p-4">
        <Text className="text-white">Hello World!</Text>
      </View>
    </ScreenContainer>
  );
}
