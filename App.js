import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

//token
import AsyncStorage from '@react-native-async-storage/async-storage';

//screens
import LoginScreen from "./screens/loginScreen";
import RegistroScreen from "./screens/registroScreen";
import HomeScreen from "./screens/homeScreen";
import RecipeDetailsScreen from "./screens/RecipeDetailsScreen";
import AddRefScreen from "./screens/addRefScreen";
import ProgressScreen from "./screens/progressScreen";
import SuasRef from "./screens/suasRef";

const Stack = createNativeStackNavigator();

export default function App() {

  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
        backgroundColor={Platform.OS === "android" ? "#F28705" : "transparent"}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#F28705",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "500",
              fontSize: 20,
            },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="registro"
            component={RegistroScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecipeDetails"
            component={RecipeDetailsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Adicionar Refeição"
            component={AddRefScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="ProgressScreen"
            component={ProgressScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="suasRef"
            component={SuasRef}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F28705',
  },
});