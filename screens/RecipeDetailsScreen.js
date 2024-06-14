import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importe o ícone desejado do React Native Vector Icons

//components
import Header from '../components/header';
import Footer from '../components/footer';

const RecipeDetailsScreen = ({ route, navigation }) => {
    const { recipe } = route.params;

    return (
        <View style={styles.container}>
            <Header />

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <AntDesign name="arrowleft" size={24} color="#F28705"/>
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <Image source={{ uri: recipe.image }} style={styles.image} />
                <Text style={styles.title}>{recipe.label}</Text>
                
                <Text style={styles.subtitle}>Instruções:</Text>
                <View style={styles.instructionsContainer}>
                    {recipe.ingredientLines.map((instruction, index) => (
                        <Text key={index} style={styles.instructionsText}>
                            {`${index + 1}. ${instruction}`}
                        </Text>
                    ))}
                </View>
                <Text style={styles.subtitle}>Calorias:</Text>
                <Text style={styles.calories}>{recipe.calories.toFixed(2)}</Text>
            </ScrollView>

            <Footer navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 10,
        paddingBottom: 100, 
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#F28705',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    ingredientsContainer: {
        marginBottom: 10,
    },
    ingredientsText: {
        fontSize: 16,
        marginBottom: 5,
    },
    instructionsContainer: {
        marginTop: 10,
    },
    instructionsText: {
        fontSize: 16,
        marginBottom: 5,
    },
    calories: {
        fontSize: 16,
        marginTop: 10,
    },
    backButton: {
        marginTop: 10,
        marginLeft: 10,
    },
});

export default RecipeDetailsScreen;
