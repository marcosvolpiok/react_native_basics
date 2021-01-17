import 'react-native-gesture-handler';
import * as React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert
  } from 'react-native';

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen Screen</Text>
        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

export default HomeScreen;

