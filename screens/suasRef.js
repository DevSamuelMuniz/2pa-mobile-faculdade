import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// Components
import Header from "../components/header";
import Footer from "../components/footer";
import CardRef from "../components/cardRef";
import { ScrollView } from "react-native-web";

export default function SuasRef({ navigation }) {
    const handleMenuPress = () => {
        console.log("Menu pressed");
    };

    return (
        <View style={styles.container}>
            <Header onMenuPress={handleMenuPress} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.sview}>

            <Text style={styles.text}>
                Suas Refeições
            </Text>

                <View style={styles.cntCard}>
                    <TouchableOpacity>
                        <CardRef />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CardRef />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CardRef />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CardRef />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CardRef />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CardRef />
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <Footer navigation={navigation} />
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
        gap: 20
    },
    sview: {
        paddingBottom: 120
    }
});

