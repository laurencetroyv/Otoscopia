import {
  StyleSheet,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import PinView from 'react-native-pin-view';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimatedLottieView from 'lottie-react-native';
import { Divider, Text } from 'react-native-paper';
import ScreenContainer from '../../../components/Screen-Container';
import Illustration from '../../../assets/pin-animation.json';
import colors from '../../../infrastructure/themes/colors';

export default function VerificationCode() {
  const {
    params: { email },
  } = useRoute();

  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(2);

  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState(0);
  const [showCompletedButton, setShowCompletedButton] = useState(false);

  useEffect(() => {
    const stringPin = enteredPin.toString();
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(second => second - 1);
      } else if (minutes > 0) {
        setMinutes(minute => minute - 1);
        setSeconds(59);
      }
    }, 1000);

    if (stringPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }

    if (stringPin.length === 6) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }

    return () => clearInterval(interval);
  }, [seconds, minutes, enteredPin]);

  const styles = StyleSheet.create({
    buttonAreaStyle: {
      marginTop: 16,
    },
    buttonTextStyle: {
      color:
        colorScheme === 'dark' ? colors.dark.onPrimary : colors.light.onPrimary,
    },
    buttonViewStyle: {
      backgroundColor:
        colorScheme === 'dark' ? colors.dark.surface : colors.primary,
      marginVertical: 4,
    },
    inputAreaStyle: {
      marginVertical: 8,
    },
    inputViewEmptyStyle: {
      backgroundColor:
        colorScheme === 'dark' ? colors.dark.surface : colors.dark.surface,
    },
    inputViewFilledStyle: {
      backgroundColor:
        colorScheme === 'dark'
          ? colors.dark.onPrimary
          : colors['primary-variant'],
    },
  });

  const colorFilter = [
    {
      keypath: 'Bg Circle',
      color:
        colorScheme === 'dark'
          ? colors.dark.background
          : colors.light.background,
    },
  ];

  const customLeftButton = showCompletedButton ? (
    <Icon
      name="checkmark-outline"
      size={36}
      color={
        colorScheme === 'dark' ? colors.dark.onSurface : colors.light.onSurface
      }
    />
  ) : undefined;

  const customRightButton = showRemoveButton ? (
    <Icon
      name="backspace-outline"
      size={36}
      color={
        colorScheme === 'dark' ? colors.dark.onSurface : colors.light.onSurface
      }
    />
  ) : undefined;

  const submitFunction = () => {
    navigation.navigate('Password', email);
  };

  const onButtonPress = key => {
    if (key === 'custom_left') {
      submitFunction();
    }
    if (key === 'custom_right') {
      pinView.current.clear();
    }
  };

  return (
    <ScreenContainer>
      <View className="flex-1 p-4 justify-center space-y-4">
        <View className="items-center">
          <AnimatedLottieView
            source={Illustration}
            loop
            autoPlay
            className="w-[55%]"
            colorFilters={colorFilter}
          />
        </View>

        <View>
          <Divider />
        </View>

        <View>
          <Text className="font-bold text-3xl text-center">{`${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</Text>
          <Text className="text-center">
            We sent the code to your email address
          </Text>
          <TouchableOpacity>
            <Text className="text-primary text-center">send again</Text>
          </TouchableOpacity>
        </View>

        <View>
          <PinView
            pinLength={6}
            inputSize={32}
            ref={pinView}
            buttonSize={48}
            onValueChange={value => setEnteredPin(value)}
            buttonAreaStyle={styles.buttonAreaStyle}
            inputAreaStyle={styles.inputAreaStyle}
            inputViewEmptyStyle={styles.inputViewEmptyStyle}
            inputViewFilledStyle={styles.inputViewFilledStyle}
            buttonViewStyle={styles.buttonViewStyle}
            buttonTextStyle={styles.buttonTextStyle}
            customLeftButton={customLeftButton}
            customRightButton={customRightButton}
            onButtonPress={onButtonPress}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
