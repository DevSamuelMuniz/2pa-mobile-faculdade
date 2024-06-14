import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

const Footer = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const handlePress = (route, key) => {
    setSelected(key);
    navigation.navigate(route);
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => handlePress("home", "home")}>
        <Image
          source={
            selected === "home"
              ? require("../assets/footer/homeSelec.png")
              : require("../assets/footer/home.png")
          }
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("addRef")}>
        <Image
          source={require("../assets/footer/addRef.png")}
          style={styles.imageAdd}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress("suasRef", "suasRef")}>
        <Image
          source={
            selected === "suasRef"
              ? require("../assets/footer/receitasSelec.png")
              : require("../assets/footer/receita.png")
          }
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#F28705",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    position: "absolute",
    bottom: 0,
  },
  image: {
    width: 35,
    height: 35,
  },
  imageAdd: {
    width: 100,
    height: 115,
    marginBottom: 30,
  },
});

export default Footer;
