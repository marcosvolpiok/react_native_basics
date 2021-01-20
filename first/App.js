import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SiteScreen from './SiteScreen';
import { createStackNavigator } from '@react-navigation/stack';



function App() {
  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Site" component={SiteScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;