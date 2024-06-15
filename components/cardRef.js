import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


export default function cardRef() {

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/imagem.png')} />
            </View>

            <View style={styles.cntText}>
                <Text style={styles.textTitulo}>Eu sou o nome de uma refeição</Text>
                <Text>Eu sou uma descrição Eu sou uma descrição Eu sou uma descrição Eu sou uma descrição Eu sou uma descrição </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'gray',
        borderRadius: 10,
        gap: 20,
        backgroundColor: 'white'
    },
    cntText: {
        flex: 1,
        gap: 10

    },
    textTitulo: {
        fontSize: 20,
        color: '#F28705',
        fontWeight: 500,
        
    }
});
