import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import LoginScreen from './screens/loginScreen';
import RegistroScreen from './screens/registroScreen';
import HomeScreen from './screens/homeScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';
<<<<<<< HEAD
import AddRefScreen from './screens/addRefScreen';

=======
import ProgressScreen from './screens/progressScreen';
>>>>>>> 2fdfaa912d19d571cb0d8360b6480c7a850b3542

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login"
                        screenOptions = {{
                          headerStyle: {
                            backgroundColor:'#F28705',
                          },
                          headerTintColor: 'white',
                          headerTitleStyle:{
                            fontWeight: '500',
                          },
                        }}
      >
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="registro" component={RegistroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} options={{ headerShown: false }} />
<<<<<<< HEAD
        <Stack.Screen name="Adicionar Refeição" component={AddRefScreen} options={{headerShown: true}}/>
=======
        <Stack.Screen name="ProgressScreen" component={ProgressScreen} options={{ headerShown: false }} />
>>>>>>> 2fdfaa912d19d571cb0d8360b6480c7a850b3542
      </Stack.Navigator>
    </NavigationContainer>
  );
}
