import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar } from 'react-native';

//screens
import LoginScreen from './screens/loginScreen';
import RegistroScreen from './screens/registroScreen';
import HomeScreen from './screens/homeScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';
import AddRefScreen from './screens/addRefScreen';
import ProgressScreen from './screens/progressScreen';
import SuasRef from './screens/suasRef';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle="dark-content" backgroundColor='#F28705'/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#F28705',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: '500',
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="registro" component={RegistroScreen} options={{ headerShown: false }} />
          <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Adicionar Refeição" component={AddRefScreen} options={{ headerShown: true }} />
          <Stack.Screen name="ProgressScreen" component={ProgressScreen} options={{ headerShown: false }} />
          <Stack.Screen name="suasRef" component={SuasRef} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
