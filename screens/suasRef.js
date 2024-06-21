import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import Header from "../components/header";
import Footer from "../components/footer";
import CardRef from "../components/cardRef";

export default function SuasRef({ navigation }) {
    const [refeicoes, setRefeicoes] = useState([]);

    useEffect(() => {
        const fetchRefeicoes = async () => {
            const userToken = await AsyncStorage.getItem('userToken');

            if (!userToken) {
                Alert.alert('Erro', 'Usuário não autenticado');
                return;
            }

            try {
                const response = await axios.get('http://10.0.0.149:3000/usuario/listar-refeicoes', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                    },
                });

                setRefeicoes(response.data);
            } catch (error) {
                console.error(error);
                Alert.alert('Erro ao Buscar Refeições', 'Ocorreu um erro ao buscar as refeições.');
            }
        };

        fetchRefeicoes();
    }, []);

    const handleMenuPress = () => {
        console.log("Menu pressed");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header onMenuPress={handleMenuPress} navigation={navigation} />
            </View>

            <Text style={styles.text}>Suas Refeições</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.sview}>

                <View style={styles.cntCard}>
                    {refeicoes.map((refeicao) => (
                        <TouchableOpacity key={refeicao._id}>
                            <CardRef titulo={refeicao.nome} descricao={refeicao.descricao} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Footer navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F5'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#F28705',
        width: '100%',
        marginLeft: 30,
        textAlign: "left",
        marginTop: 20,
        marginBottom: 20
    },
    cntCard: {
        flex: 1,
        width: '90%',
        marginHorizontal: '5%',
        gap: 4,
    },
    sview: {
        marginBottom: 120
    },
    header: {
        zIndex: 1,
        width: '100%'
    },
    footer: {
        zIndex: 2,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});
