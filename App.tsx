import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Landing from './src/screens/Landing';
import Register from './src/screens/Register';
import { RootParameterList } from './src/types/routes';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator<RootParameterList>();

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider config={config}>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            options={{headerShown: false}}
            component={Landing}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen  options={{headerShown: false}} name="Register" component={Register} />
          <Stack.Screen  options={{headerShown: false}} name="Login" component={Login} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
