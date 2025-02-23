import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types"; // Importamos los tipos para la navegación
import Home from "../screens/Home";
import LessonList from "../screens/LessonList";
import LessonDetail from "../screens/LessonDetail";

// Creamos el stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LessonList" component={LessonList} />
      <Stack.Screen name="LessonDetail" component={LessonDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
