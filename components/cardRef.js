import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function CardRef({ titulo, descricao }) {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/imagem.png')} style={styles.image} />
            </View>

            <View style={styles.cntText}>
                <Text style={styles.textTitulo}>{titulo}</Text>
                <Text>{descricao}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        gap: 20,
        marginVertical: 10,
    },
    cntText: {
        flex: 1,
        gap: 10,
    },
    textTitulo: {
        fontSize: 20,
        color: '#F28705',
        fontWeight: '500',
    },
    image: {
        width: 100,
        height: 100,
    },
});
