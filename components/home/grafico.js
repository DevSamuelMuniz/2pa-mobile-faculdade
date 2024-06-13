import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";


export default function graficoComponent() {
  return (
    <View style={styles.container}>

      <Text style={styles.textMetas}> Suas metas</Text>

      <Image
        source={require("../../assets/home/grafico.png")}
        style={styles.image}
      />

      <Text style={styles.textSaiba}> clique e saiba mais</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    marginTop: 10,
    marginBottom: 20,
  },
  textMetas: {
    fontSize: 26,
    color: '#F28705',
    fontWeight: 'bold',
  },
  textSaiba: {
    fontSize: 16,
    color: "#F28705",
    fontWeight: 'bold',
  }
});
