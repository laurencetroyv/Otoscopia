import { TouchableOpacity, View } from 'react-native';
import React, { useRef, useContext, useState, useEffect } from 'react';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../../components/Screen-Container';
import { PostContext } from '../../../services/post/Post-Context';

export default function LeftEarCamera() {
  const { isPassed, uploadRecordings } = useContext(PostContext);
  const cameraRef = useRef(RNCamera);
  const navigation = useNavigation();

  const [isRecording, setIsRecording] = useState(false);

  const takePicture = async () => {
    if (cameraRef.current) {
      setIsRecording(true);
      const options = {
        quality: '1080p',
        orientation: 'portrait',
        maxDuration: 10,
        base64: true,
      };
      const leftEarData = await cameraRef.current.recordAsync(options);

      setIsRecording(false);

      uploadRecordings(leftEarData.uri);
    }
    setIsRecording(false);
  };

  // useEffect(
  //   () =>
  //     isPassed
  // ? navigation.navigate('Right Ear Camera')
  //       : setIsRecording(false),
  //   [navigation, isPassed],
  // );

  return (
    <ScreenContainer>
      <View className="p-4 flex-1 bg-light-surface rounded-t-3xl mt-6 space-y-4">
        <View className="flex-row px-8 justify-center items-center">
          <View className="bg-primary rounded-full w-4 h-4">
            <Icon name="check" size={16} color="white" />
          </View>

          <View className="bg-primary h-1 grow" />

          <View className="bg-primary rounded-full w-4 h-4" />

          <View className="bg-primary h-1 grow" />

          <View className="border border-primary rounded-full w-2 h-2" />
        </View>

        <RNCamera
          ratio="4:3"
          className="flex-1"
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          ref={cameraRef}
        />

        <View className="flex-0 flex-row justify-center">
          <TouchableOpacity
            className={`flex-0 rounded-full p-4 py-4 align-center m-4 ${
              isRecording ? 'bg-black' : 'bg-white'
            }`}
            onPress={takePicture}>
            <View
              className={`w-8 h-8 rounded-full ${
                isRecording ? 'bg-white' : 'bg-black'
              }`}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
}
