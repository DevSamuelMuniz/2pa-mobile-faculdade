import React from "react";
import { View, StyleSheet } from "react-native";

//components
import Header from "../components/header";
import GraficoComponent from "../components/home/grafico";

export default function HomeScreen({ navigation }) {
  const handleMenuPress = () => {
    // Lógica para o menu hamburguer
    console.log("Menu pressed");
  };

  const handlegraficopress = () => {
    // Lógica para o menu hamburguer
    console.log("Menu pressed");
  };

  return (
    <View style={styles.container}>
      <Header onMenuPress={handleMenuPress} />
      <GraficoComponent onGraficoPress={handlegraficopress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

  },
  image: {
    marginTop: 10,
    marginBottom: 20,
  },
});
