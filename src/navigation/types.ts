export type RootStackParamList = {
  Home: undefined; // No pasa parámetros
  LessonList: undefined; // No pasa parámetros
  LessonDetail: { lessonId: string }; // La pantalla de detalle recibe un parámetro 'lessonId'
};
