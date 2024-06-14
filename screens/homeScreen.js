import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import axios from "axios";

//acomponents
import Header from "../components/header";
import GraficoComponent from "../components/home/grafico";
import Footer from "../components/footer";
import RecipeList from "../components/recipeList";

const EDAMAM_APP_ID = "dd1150f6";
const EDAMAM_APP_KEY = "e2e9e4970d21d43026eb10a14d7394cf";
const RESULTS_PER_CATEGORY = 20;

export default function HomeScreen({ navigation }) {
  const [healthyRecipes, setHealthyRecipes] = useState([]);
  const [veganRecipes, setVeganRecipes] = useState([]);
  const [calories, setCalories] = useState(500);

  useEffect(() => {
    fetchRecipes();
  }, [calories]);

  const fetchRecipes = async () => {
    try {
      const healthyResponse = await axios.get(
        `https://api.edamam.com/search`, {
        params: {
          q: "healthy",
          app_id: EDAMAM_APP_ID,
          app_key: EDAMAM_APP_KEY,
          calories: `0-${calories}`,
          health: "paleo",
          to: RESULTS_PER_CATEGORY
        }
      });

      const veganResponse = await axios.get(
        `https://api.edamam.com/search`, {
        params: {
          q: "vegan",
          app_id: EDAMAM_APP_ID,
          app_key: EDAMAM_APP_KEY,
          calories: `0-${calories}`,
          health: "vegan",
          to: RESULTS_PER_CATEGORY
        }
      });

      setHealthyRecipes(healthyResponse.data.hits);
      setVeganRecipes(veganResponse.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleMenuPress = () => {
    console.log("Menu pressed");
  };

  const handleRefreshRecipes = () => {
    fetchRecipes();
  };

  return (
    <View style={styles.container}>
      <Header onMenuPress={handleMenuPress} />
      <TouchableOpacity
        style={styles.buttongrafico}
        onPress={() => navigation.navigate("ProgressScreen")}
      >
        <GraficoComponent />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Digite o número de calorias:"
        keyboardType="numeric"
        onChangeText={(text) => setCalories(parseInt(text))}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.sview}>
        <RecipeList
          title="Receitas Saudáveis"
          recipes={healthyRecipes}
          onRefresh={handleRefreshRecipes} // Passando a função de atualização para o RecipeList
        />
        <RecipeList
          title="Receitas Veganas"
          recipes={veganRecipes}
          onRefresh={handleRefreshRecipes} // Passando a função de atualização para o RecipeList
        />
      </ScrollView>

      <Footer navigation={navigation} />
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
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "80%",
  },
  sview: {
    marginBottom: 100,
    marginHorizontal: 40
  }
});
