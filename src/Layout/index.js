import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Layout({children, navigation}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text>Logo</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Favourite')}>
          <Icon name="ios-heart" size={25} color="#000" />
        </TouchableOpacity>
      </View>
      {children}
    </>
  );
}

export default Layout;
