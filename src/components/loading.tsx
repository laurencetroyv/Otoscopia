import { StyleSheet, View, useColorScheme } from 'react-native';
import React from 'react';
import { Modal, Portal } from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';
import Animation from '../assets/loading-animation.json';
import colors from '../infrastructure/themes/colors';

export default function Loading({
  visible,
}: {
  visible: boolean;
}): React.JSX.Element {
  const colorScheme =
    useColorScheme() === 'dark'
      ? colors.background.dark
      : colors.background.light;

  return (
    <Portal>
      <Modal visible={visible}>
        <View>
          <AnimatedLottieView
            source={Animation}
            autoPlay
            loop
            className="w-full"
            colorFilters={[
              {
                keypath: 'Shape Layer 2',
                color: colorScheme,
              },
            ]}
          />
        </View>
      </Modal>
    </Portal>
  );
}
