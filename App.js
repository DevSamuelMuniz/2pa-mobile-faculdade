import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import LoginScreen from './screens/loginScreen';
import RegistroScreen from './screens/registroScreen';
import HomeScreen from './screens/homeScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';
import ProgressScreen from './screens/progressScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="registro" component={RegistroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProgressScreen" component={ProgressScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
