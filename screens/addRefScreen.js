import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';

//components
import InputLabel from '../components/inputLabel';

export default function LoginScreen({ navigation }) {
  const [nomeRef, setnomeRef] = useState("");
  const [descRef, setdescRef] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const handlePhotoOption = async () => {
    // Solicita permissão para usar a câmera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos da permissão para acessar a câmera');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Image URI: ", result.uri);
      setImageUri(result.uri);
      Alert.alert('Foto Capturada', 'Sua foto foi tirada com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelcontainer}>
        <Text style={styles.texto}>Qual a refeição?</Text>
      </View>
      <InputLabel
        value={nomeRef}
        onChangeText={setnomeRef}
        placeholder="Digite um nome para a sua refeição"
      />
      <View style={styles.labelcontainer}>
        <Text style={styles.texto}>Sobre a refeição:</Text>
      </View>
      <InputLabel
        value={descRef}
        onChangeText={setdescRef}
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

        <TouchableOpacity style={styles.buttonSave}>
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
