import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import * as Progress from "react-native-progress";
import { Ionicons } from "@expo/vector-icons";

import Header from "../components/header";
import Footer from "../components/footer";

export default function ProgressScreen({ navigation }) {
  const [metas, setMetas] = useState([
  
  ]);

  const coresMetas = ["#C96E00", "#FBA946", "#73CD00", "#5FA604"];

  const [modalVisible, setModalVisible] = useState(false);
  const [novaMetaNome, setNovaMetaNome] = useState("");
  const [novaMetaQuantidade, setNovaMetaQuantidade] = useState("");

  // Função para incrementar a meta atual
  const incrementMetaAtual = (id) => {
    const updatedMetas = metas.map((meta) =>
      meta.id === id && meta.metaAtual < meta.metaVal
        ? { ...meta, metaAtual: meta.metaAtual + 1 }
        : meta
    );
    setMetas(updatedMetas);
  };

  // Função para decrementar a meta atual
  const decrementMetaAtual = (id) => {
    const updatedMetas = metas.map((meta) =>
      meta.id === id
        ? { ...meta, metaAtual: Math.max(0, meta.metaAtual - 1) }
        : meta
    );
    setMetas(updatedMetas);
  };

  // Função para abrir o modal
  const abrirModal = () => {
    setModalVisible(true);
  };

  // Função para fechar o modal
  const fecharModal = () => {
    setModalVisible(false);
  };

  // Função para adicionar uma nova meta
  const adicionarMeta = () => {
    const id = metas.length + 1;
    const novaMeta = {
      id: id,
      nome: novaMetaNome,
      metaVal: parseInt(novaMetaQuantidade), // Converter para número inteiro
      metaAtual: 0,
    };
    setMetas([...metas, novaMeta]);
    setNovaMetaNome("");
    setNovaMetaQuantidade("");
    setModalVisible(false);
  };

  // Atualiza o gráfico sempre que as metas mudam
  const chartData = metas.map((meta, index) => ({
    name: `${meta.nome} (${meta.metaAtual}/${meta.metaVal})`,
    population: meta.metaAtual,
    color: coresMetas[index % coresMetas.length],
  }));

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.text}>Progresso</Text>

      <View style={styles.graficoContainer}>
        <PieChart style={{marginLeft: '47%'}}
          data={chartData}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          hasLegend={false}
        />
      </View>

      <View style={{ width: "100%" }}>
        <Text style={styles.text}>Metas</Text>
        <ScrollView style={{ width: "100%", paddingHorizontal: 15 }}>
          {metas.map((meta, index) => (
            <View
              key={meta.id}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                width: "100%",
              }}
            >
              <Progress.Bar
                progress={meta.metaAtual / meta.metaVal}
                width={160}
                height={30}
                color={coresMetas[index % coresMetas.length]}
                unfilledColor="#e0e0e0"
                borderColor="transparent"
                borderWidth={2}
                borderRadius={5}
              />
              <Text style={{ fontSize: 16, textAlign: "center" }}>
                {`${meta.nome}`}
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => decrementMetaAtual(meta.id)}>
                  <Ionicons name="remove" size={24} color="blue" />
                </TouchableOpacity>

                <Text style={{ marginHorizontal: 10, fontSize: 18 }}>
                  {`(${meta.metaAtual}/${meta.metaVal})`}
                </Text>

                <TouchableOpacity onPress={() => incrementMetaAtual(meta.id)}>
                  <Ionicons name="add" size={24} color="blue" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Botão para adicionar novas metas */}
      <TouchableOpacity style={styles.addButton} onPress={abrirModal}>
        <Text style={styles.addButtonText}>Adicionar Meta</Text>
      </TouchableOpacity>

      {/* Modal para adicionar novas metas */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={fecharModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Nova Meta</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome da Meta"
              value={novaMetaNome}
              onChangeText={setNovaMetaNome}
            />

            <TextInput
              style={styles.input}
              placeholder="Quantidade de Metas"
              keyboardType="numeric"
              value={novaMetaQuantidade}
              onChangeText={setNovaMetaQuantidade}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={fecharModal}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addButtonModal} onPress={adicionarMeta}>
                <Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#F28705",
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  graficoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  addButton: {
    backgroundColor: "#F28705",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "#999",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  addButtonModal: {
    backgroundColor: "#F28705",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
