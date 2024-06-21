import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BurgerMenu from "./BurgerMenu"; 

const Header = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/header/logo.png")}
        style={styles.image}
      />

      <Image
        source={require("../assets/header/nutrilife.png")}
        style={styles.image}
      />

      <TouchableOpacity onPress={toggleMenu}>
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>

      {isMenuOpen && <BurgerMenu onClose={() => setIsMenuOpen(false)} navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#F28705",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10
  },
});

export default Header;
