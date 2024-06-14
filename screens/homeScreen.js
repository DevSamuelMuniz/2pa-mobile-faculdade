import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/header";
import GraficoComponent from "../components/home/grafico";
import Footer from "../components/footer";

export default function HomeScreen({ navigation }) {
  const handleMenuPress = () => {
    console.log("Menu pressed");
  };

  return (
    <View style={styles.container}>
      <Header onMenuPress={handleMenuPress} />
      <TouchableOpacity
        style={styles.buttongrafico}
        onPress={() => navigation.navigate("metas")}
      >
        <GraficoComponent /> 
      </TouchableOpacity>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttongrafico: {
  },
});
