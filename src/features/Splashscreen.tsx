import React from 'react';
import { useColorScheme } from 'react-native';
import Container from '../components/container';
import Icon from '../assets/icon';
import colors from '../infrastructure/themes/colors';

export default function Splashscreen(): React.JSX.Element {
  const colorScheme = useColorScheme() === 'dark';

  return (
    <Container styles="items-center justify-center">
      <Icon
        subtitleColor={colorScheme ? colors.text.dark : colors.text.light}
      />
    </Container>
  );
}
