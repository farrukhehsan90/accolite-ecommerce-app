import {Button} from '../Button';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function Card({text, buttonText, onPress}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          paddingBottom: 80,
        }}>
        <Image
          source={require('../../Assets/card/circle.png')}
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            top: -50,
            alignSelf: 'center',
          }}
        />
      </View>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={{alignItems: 'center', paddingBottom: 19}}>
        <Button value={buttonText} width="95%" onPress={onPress} />
      </View>
    </View>
  );
}

export default Card;
