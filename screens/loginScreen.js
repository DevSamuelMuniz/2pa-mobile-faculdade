import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

//components
import InputLabel from "../components/inputLabel";
import ButtonCustom from "../components/buttonCustom";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/usuario/login', {
        email,
        senha,
      });

      const { token } = response.data;

      await AsyncStorage.setItem('userToken', token)

   
      navigation.navigate('home');
    } catch (error) {
      Alert.alert("Erro de autenticação", "Email ou senha incorretos");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo/logoLogin.png")}
        style={styles.image}
      />
      <Text style={styles.textHeader}>Entre na sua conta</Text>
      <InputLabel
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o seu email aqui"
      />
      <InputLabel
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite a sua senha aqui"
        secureTextEntry
      />
      <ButtonCustom
        title="Entrar"
        onPress={handleLogin}
      />

      <Text style={styles.textCriar}>Não tem uma conta?</Text>
      <TouchableOpacity
        style={styles.buttonCriar}
        onPress={() => navigation.navigate("registro")}
      >
        <Text style={styles.buttonCriarText}>Criar uma conta agora!</Text>
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
  image: {
    margin: 10,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    marginTop: 20,
  },
  textCriar: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 20,
  },
  buttonCriar: {
    marginTop: 10,
    alignItems: 'center',
  },
  buttonCriarText: {
    color: "#235802",
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
