import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function GraficoComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.textMetas}> Suas metas</Text>
      <Image
        source={require("../../assets/home/grafico.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.textSaiba}> clique e saiba mais</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    marginTop: 10,
    height: 200,
    width: '100%',
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
