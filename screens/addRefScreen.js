import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

//components
import InputLabel from '../components/inputLabel';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddRefScreen({ navigation }) {
  const [nomeRef, setNomeRef] = useState("");
  const [descRef, setDescRef] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const handlePhotoOption = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos da permissão para acessar a câmera');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.6,
    });

    if (!result.cancelled) {
      console.log("Image URI: ", result.uri);
      setImageUri(result.uri); // Define a URI da imagem no estado
      Alert.alert('Foto Capturada', 'Sua foto foi tirada com sucesso!');
    } else {
      Alert.alert('Foto Cancelada', 'Você cancelou a captura da foto.');
    }
  };

  const handleSave = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    if (!userToken) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return;
    }

    if (!imageUri) {
      Alert.alert('Erro', 'Nenhuma imagem selecionada');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('nome', nomeRef);
      formData.append('descricao', descRef);
      formData.append('foto', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'image.jpg'
      });

      const response = await axios.post('http://10.0.0.149:3000/usuario/criar-refeicao', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${userToken}`,
        },
      });

      console.log(response.data);
      Alert.alert('Refeição Criada', 'Sua refeição foi criada com sucesso!');
      setNomeRef("");
      setDescRef("");
      setImageUri(null);

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
        <TouchableOpacity style={styles.buttonadd} onPress={handlePhotoOption}>
          <Image
            source={require("../assets/addref/camera.png")}
            style={styles.image}
          />
          <Text style={styles.buttonTextAdd}>Adicionar foto da Refeição</Text>
        </TouchableOpacity>

        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        )}

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
  buttonadd: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    width: '100%',
    backgroundColor: "#F28705",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  buttonTextAdd: {
    color: 'white',
    fontWeight: '500',
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
  imagePreview: {
    width: 200,
    height: 200,
    marginVertical: 20,
    resizeMode: 'contain',
  },
  image: {
    width: 24,
    height: 24,
  },
});
