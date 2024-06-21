import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import axios from 'axios';

//components
import InputLabel from '../components/inputLabel';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddRefScreen({ navigation }) {
  const [nomeRef, setNomeRef] = useState("");
  const [descRef, setDescRef] = useState("");

  const handleSave = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    if (!userToken) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return;
    }

    try {
      const response = await axios.post('http://10.0.0.149:3000/usuario/criar-refeicao', {
        nome: nomeRef,
        descricao: descRef
      }, {
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
      });

      console.log(response.data);
      Alert.alert('Refeição Criada', 'Sua refeição foi criada com sucesso!');
      setNomeRef("");
      setDescRef("");

    } catch (error) {
      console.error(error);
      Alert.alert('Erro ao Criar Refeição', 'Ocorreu um erro ao criar a refeição.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelcontainer}>
        <Text style={styles.texto}>Qual a refeição?</Text>
      </View>
      <InputLabel
        value={nomeRef}
        onChangeText={setNomeRef}
        placeholder="Digite um nome para a sua refeição"
      />
      <View style={styles.labelcontainer}>
        <Text style={styles.texto}>Sobre a refeição:</Text>
      </View>
      <InputLabel
        value={descRef}
        onChangeText={setDescRef}
        placeholder="Descreva a sua refeição"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
          <Text style={styles.buttonTextAdd}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  labelcontainer: {
    width: '100%',
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "#F28705",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%',
  },
  buttonSave: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    width: '100%',
    backgroundColor: "#5FA604",
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTextAdd: {
    color: 'white',
    fontWeight: '500',
  },
});
