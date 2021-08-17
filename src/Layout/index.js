import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';

function Layout({children}) {
  return (
    <>
      <View>
        <Text>Logo</Text>
      </View>
      {children}
    </>
  );
}

export default Layout;
