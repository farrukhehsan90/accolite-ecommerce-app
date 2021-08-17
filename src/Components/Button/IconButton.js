import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';

function IconButton({
  onPress,
  value,
  color,
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
        {
          width: width,
          backgroundColor: color,
          height,
          flexDirection: 'row',
          opacity: disable ? 0.5 : null,
        },
      ]}>
      <Image
        source={require('../../Assets/Icons/fb.jpeg')}
        style={{width: 20, height: 20, marginLeft: 90, marginRight: 10}}
      />
      <Text style={[styles.text]}>{value}</Text>
    </TouchableOpacity>
  );
}

export default IconButton;
