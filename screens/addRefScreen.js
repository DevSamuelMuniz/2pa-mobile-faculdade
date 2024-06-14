import React, { useState } from "react";
import {View,Text,Image,TouchableOpacity,StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';



export default function LoginScreen({ navigation }) {
  const [nomeRef, setnomeRef] = useState("");
  const [descRef, setdescRef] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo/logoLogin.png")}
        style={styles.image}
      />
      <Text style={styles.textHeader}>Entre na sua conta</Text>
      <InputLabel
        label="Qual a sua refeição"
        value={email}
        onChangeText={setEmail}
        placeholder="Digite um nome para a sua refeição"
      />
      <InputLabel
        label="Sobre a Sua refeição:"
        value={senha}
        onChangeText={setSenha}
        placeholder="Descrever a sua refeição"
      />
    
      <TouchableOpacity style={styles.buttonCriar}>
      <Image
        source={require("../assets/addref/camera.png")}
        style={styles.image}
      />
        <Text style={styles.buttonCriarText}>Adicionar foto da Refeição</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCriar}>
      <Image
        source={require("../assets/addref/camera.png")}
        style={styles.image}
      />
        <Text style={styles.buttonCriarText}>Salvar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F28705",
  },
  

});
