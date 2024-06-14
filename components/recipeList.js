import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const RecipeList = ({ title, recipes, onRefresh }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.title}</Text>
          </View>
        )}
      />
      <TouchableOpacity onPress={onRefresh} style={styles.button}>
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
    color: '#F28705',
  },
  recipeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#F28705',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default RecipeList;
