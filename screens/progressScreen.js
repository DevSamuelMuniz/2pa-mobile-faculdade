import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";

import Header from "../components/header";
import Footer from "../components/footer";

export default function ProgressScreen({ navigation }) {

    const handleMenuPress = () => {
        console.log("Menu pressed");
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
