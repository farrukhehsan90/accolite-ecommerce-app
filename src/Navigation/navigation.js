import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SignIn,
  SignUp,
  Home,
  ProductDetail,
  Cart,
  Favourite,
} from '../Screens/index';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerShown={false}>
        <Stack.Screen
          name="Home"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Favourite"
          component={Favourite}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Product"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
