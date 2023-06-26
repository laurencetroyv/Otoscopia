import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import React from 'react';
import { Modal, Portal, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import colors from '../../../infrastructure/themes/colors';
import { PrivacyPolicy, TermsAndConditions } from '../../../services/mock-data';

export default function Policy({ visible, onDismiss }) {
  const colorScheme = useColorScheme();

  const style = StyleSheet.create({
    modalStyle: {
      backgroundColor:
        colorScheme === 'dark' ? colors.dark.surface : colors.light.surface,
      borderRadius: 5,
      marginHorizontal: 16,
      maxHeight: '70%',
      padding: 20,
    },
  });
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={style.modalStyle}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="font-bold text-2xl text-center">
            Terms and Conditions
          </Text>
          <Text>{TermsAndConditions}</Text>

          <Text className="font-bold text-2xl text-center">Privacy Policy</Text>
          <Text>{PrivacyPolicy}</Text>
        </ScrollView>
      </Modal>
    </Portal>
  );
}

Policy.propTypes = {
  visible: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
};
