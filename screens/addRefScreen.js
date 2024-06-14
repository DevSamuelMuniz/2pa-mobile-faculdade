import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

//components
import InputLabel from '../components/inputLabel'

export default function LoginScreen({ navigation }) {
  const [nomeRef, setnomeRef] = useState("");
  const [descRef, setdescRef] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const handlePhotoOption = () => {
    Alert.alert(
      "Adicionar foto da Refeição",
      "Escolha uma opção",
      [
        {
          text: "Tirar Foto",
          onPress: () => handleTakePhoto(),
        },
        {
          text: "Escolher da Galeria",
          onPress: () => handleChoosePhoto(),
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  const handleTakePhoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else {
          const uri = response.assets[0].uri;
          setImageUri(uri);
        }
      }
    );
  };

  const handleChoosePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else {
          const uri = response.assets[0].uri;
          setImageUri(uri);
        }
      }
    );
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
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.imagePreview} />
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonadd} onPress={handlePhotoOption}>
          <Image
            source={require("../assets/addref/camera.png")}
            style={styles.image}
          />
          <Text style={styles.buttonTextAdd}>Adicionar foto da Refeição</Text>
        </TouchableOpacity>

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
  },
});

