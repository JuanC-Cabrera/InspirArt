// src/screens/LessonDetail.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/NavigationTypes";

type LessonDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "LessonDetail"
>;

interface LessonDetailProps {
  route: LessonDetailScreenRouteProp;
}

const LessonDetail: React.FC<LessonDetailProps> = ({ route }) => {
  const { lessonId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la Lección</Text>
      <Text style={styles.lessonId}>ID de Lección: {lessonId}</Text>
      {/* Aquí puedes agregar más detalles de la lección */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  lessonId: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default LessonDetail;
