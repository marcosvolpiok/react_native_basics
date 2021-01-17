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


const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };
  
export default ProfileScreen;