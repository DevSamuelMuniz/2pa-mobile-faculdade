import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Footer = ({ onMenuPress }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
      <Image
        source={require("../assets/footer/homeSelec.png")}
        style={styles.image}
      />
      </TouchableOpacity>
      
      <TouchableOpacity  onPress={() => navigation.navigate("addRef")}>
      <Image
        source={require("../assets/footer/add.png")}
        style={styles.imageAdd}
      />
      </TouchableOpacity>
      

      <TouchableOpacity  onPress={() => navigation.navigate("suasRef")}>
      <Image
        source={require("../assets/footer/receitas.png")}
        style={styles.image}
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#F28705",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 70,
  },
  imageAdd: {
    marginBottom: 20,
  }
});

export default Footer;
