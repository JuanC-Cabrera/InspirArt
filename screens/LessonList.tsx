import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack"; // Importamos el tipo de navegación
import { RootStackParamList } from "../navigation/types"; // Importamos el tipo de las rutas

// Tipamos la propiedad de navegación
type LessonListNavigationProp = StackNavigationProp<
  RootStackParamList,
  "LessonList"
>;

interface Props {
  navigation: LessonListNavigationProp;
}

const LessonList: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson List</Text>
      <Button
        title="Go to Lesson Detail"
        onPress={() => navigation.navigate("LessonDetail", { lessonId: "1" })}
      />
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

export default LessonList;
