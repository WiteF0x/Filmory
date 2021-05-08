import React from 'react';
import { View, Text, TextInput } from 'react-native';

import COLORS from '../../constants/colors';
import styles from './styles';

const DefaultInput = ({ label, containerStyles, ...props }) => (
  <View style={[styles.container, containerStyles]}>
    <Text style={styles.label}>{ label }</Text>
    <TextInput
      placeholderTextColor={COLORS.light_orange}
      style={styles.input}
      { ...props }
    />
  </View>
);

export default DefaultInput;
