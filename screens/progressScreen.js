import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";


export default function progressScreen({ navigation }) {

    const handleMenuPress = () => {
        console.log("Menu pressed");
    };

    const handleRefreshRecipes = () => {
        fetchRecipes();
    };

    return (
        <View style={styles.container}>
            <Header onMenuPress={handleMenuPress} />
            

            <Footer navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});
