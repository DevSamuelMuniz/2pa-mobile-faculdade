import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import axios from "axios";
import Header from "../components/header";
import GraficoComponent from "../components/home/grafico";
import Footer from "../components/footer";
import RecipeList from "../components/recipeList";

const SPOONACULAR_API_KEY = "287205b89b164bdea08bae0661470da9";

export default function HomeScreen({ navigation }) {
  const [healthyRecipes, setHealthyRecipes] = useState([]);
  const [veganRecipes, setVeganRecipes] = useState([]);
  const [calories, setCalories] = useState(500);

  useEffect(() => {
    fetchHealthyRecipes();
    fetchVeganRecipes();
  }, [calories]);

  const fetchHealthyRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          apiKey: SPOONACULAR_API_KEY,
          maxCalories: calories,
          number: 3,
          diet: "popular", // Using diet instead of tags
        }
      });
      setHealthyRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching healthy recipes:", error);
    }
  };

  const fetchVeganRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          apiKey: SPOONACULAR_API_KEY,
          maxCalories: calories,
          number: 3,
          diet: "paleo", // Using diet instead of tags
        }
      });
      setVeganRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching vegan recipes:", error);
    }
  };

  const handleMenuPress = () => {
    console.log("Menu pressed");
  };

  return (
    <View style={styles.container}>
      <Header onMenuPress={handleMenuPress} />
      <ScrollView style={styles.sview}>
        <TouchableOpacity
          style={styles.buttongrafico}
          onPress={() => navigation.navigate("metas")}
        >
          <GraficoComponent />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Digite o número de calorias:"
          keyboardType="numeric"
          onChangeText={(text) => setCalories(parseInt(text))}
        />
        <View style={styles.list}>
          <RecipeList
            title="Receitas Saudáveis"
            recipes={healthyRecipes}
            onRefresh={fetchHealthyRecipes}
          />
          <RecipeList
            title="Receitas Veganas"
            recipes={veganRecipes}
            onRefresh={fetchVeganRecipes}
          />
        </View>
      </ScrollView>
      <Footer navigation={navigation} style={styles.footer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttongrafico: {},
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "80%",
    marginHorizontal: 20,
  },
  list: {
    marginHorizontal: 20,
  },
  sview: {
  marginBottom: 100,
  },
});
