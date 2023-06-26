import { StyleSheet } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import CountryFlag from 'react-native-country-flag';
import PropTypes from 'prop-types';

import StyledTextInput from '../../../components/Text-Input';

const icon = ({ size }) => (
  <CountryFlag isoCode="ph" size={size} className="rounded-sm" />
);

const style = StyleSheet.create({
  textInputIcon: {
    borderRadius: 0,
  },
});

export default function PhoneNumberInput({
  onChangeText,
  onEndEditing,
  showHelper,
}) {
  return (
    <StyledTextInput
      mode="outlined"
      label="Phone Number"
      inputMode="numeric"
      keyboardType="numeric"
      maxLength={11}
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
      placeholder="09"
      textContentType="none"
      right={
        <TextInput.Icon style={style.textInputIcon} icon={icon} size={15} />
      }
      showHelper={showHelper}
      helperMessage="Invalid mobile number"
    />
  );
}

PhoneNumberInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func.isRequired,
  showHelper: PropTypes.bool.isRequired,
};
