import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native"; // Importamos el tipo de route
import { RootStackParamList } from "../navigation/types"; // Importamos el tipo de las rutas

// Tipamos la propiedad de route
type LessonDetailRouteProp = RouteProp<RootStackParamList, "LessonDetail">;

interface Props {
  route: LessonDetailRouteProp;
}

const LessonDetail: React.FC<Props> = ({ route }) => {
  const { lessonId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson Detail for Lesson {lessonId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LessonDetail;
