import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

//components
import InputLabel from "../components/inputLabel";
import ButtonCustom from "../components/buttonCustom";

export default function RegistroScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo/logoLogin.png")}
        style={styles.image}
      />
      <Text style={styles.textHeader}>Crie a sua conta</Text>

      <InputLabel
        label="Nome completo"
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o seu nome completo aqui"
      />
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
      />
      <InputLabel
        label="Confirmar senha"
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite a mesma senha aqui"
      />
      <ButtonCustom
        title="Cadastrar"
        onPress={() => navigation.navigate("login")}
      />

      <Text style={styles.textCriar}>Já tem uma conta?</Text>
      <TouchableOpacity
        style={styles.buttonCriar}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.buttonCriarText}>Entrar com uma conta agora!</Text>
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
    alignItems: "center",
  },
  buttonCriarText: {
    color: "#235802",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});
