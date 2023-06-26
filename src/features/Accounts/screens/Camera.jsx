import { TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../../components/Screen-Container';

export default function Camera() {
  const cameraRef = useRef(RNCamera);
  const navigation = useNavigation();

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const imageData = await cameraRef.current.takePictureAsync(options);

      navigation.navigate('Welcome', imageData.uri);
    }
  };

  return (
    <ScreenContainer>
      <View className="flex-1 py-8 flex-col bg-dark-background">
        <RNCamera
          ratio="4:3"
          className="flex-1"
          type={RNCamera.Constants.Type.front}
          captureAudio={false}
          ref={cameraRef}
        />

        <View className="flex-0 flex-row justify-center">
          <TouchableOpacity
            className="flex-0 bg-white rounded-full p-4 py-4 align-center m-4"
            onPress={takePicture}>
            <View className="bg-black w-8 h-8 rounded-full" />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
}
