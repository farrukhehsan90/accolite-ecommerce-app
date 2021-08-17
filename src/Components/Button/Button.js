import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

function Button({
  onPress,
  value,
  width = '100%',
  height = 45,
  disable = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      style={[
        styles.btn,
        {width: width, height, opacity: disable ? 0.5 : null},
      ]}>
      <Text style={[styles.text]}>{value}</Text>
    </TouchableOpacity>
  );
}

export default Button;
