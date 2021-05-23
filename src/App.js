import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <View style={{ flex: 1, backgroundColor: '#312E38' }}>
          <Routes />
        </View>
      </NavigationContainer>
    </Provider>
  );
};
