// src/screens/LessonList.tsx

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/NavigationTypes"; // Asegúrate de la ruta correcta
import Card from "../components/Card";

// Tipamos la navegación para que reconozca los parámetros de 'LessonDetail'
type LessonListNavigationProp = StackNavigationProp<
  RootStackParamList,
  "LessonList"
>;

const LessonList = () => {
  // Usamos la navegación tipada
  const navigation = useNavigation<LessonListNavigationProp>();

  const handleCardPress = (lessonId: string) => {
    // Navegar a la pantalla de lección, pasando el ID de la lección como parámetro
    navigation.navigate("LessonDetail", { lessonId });
  };

  return (
    <ScrollView style={styles.container}>
      <Card
        title="Líneas Básicas"
        description="Aprende a dominar las líneas simples."
        onPress={() => handleCardPress("1")}
      />
      <Card
        title="Curvas y Fluidez"
        description="Mejora tu control de las curvas."
        onPress={() => handleCardPress("2")}
      />
      {/* Agrega más tarjetas de lecciones */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default LessonList;
