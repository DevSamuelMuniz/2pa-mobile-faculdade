import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BurgerMenu = ({ onClose }) => {
    // Calcula a altura do container como 80% da altura da tela
    const containerHeight = windowHeight * 0.8;

    return (
        <View style={[styles.container, { height: containerHeight }]}>
            <TouchableOpacity style={styles.menuItem} onPress={() => { }}>
                <Image
                    source={require("../assets/sidebar/config.png")}
                    style={styles.image}
                />
                <Text style={styles.menuText}>Configurações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => { }}>
                <Image
                    source={require("../assets/sidebar/modo.png")}
                    style={styles.image}
                />
                <Text style={styles.menuText}>Modo Escuro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => { }}>
                <Image
                    source={require("../assets/sidebar/politica.png")}
                    style={styles.image}
                />
                <Text style={styles.menuText}>Políticas de Privacidade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 105,
        right: 0,
        width: 300,
        backgroundColor: "#F28705",
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'flex-end',
        paddingBottom: 40,
        zIndex: 100,
        gap: 14,
        opacity: 0.95,
    },
    menuItem: {
        flexDirection: 'row',
        gap: 14,
        justifyContent: 'start',
        backgroundColor: '#C96E00',
        borderRadius: 6,
        padding: 12,
    },
    menuText: {
        color: "white",
        fontSize: 16,
    },
    closeButton: {
        marginTop: 10,
        paddingVertical: 10,
        backgroundColor: "#DD6B20",
        alignItems: "center",
    },
    closeText: {
        color: "white",
        fontSize: 16,
    },
});

export default BurgerMenu;
