import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoursesScreen from '../Screens/CourcesScreen';
import CourseDetailsScreen from '../Screens/CourseDetailsScreen';

export type CoursesStackParamList = {
  Courses: undefined;
  CourseDetails: { course: any };
};

const Stack = createStackNavigator<CoursesStackParamList>();

const CoursesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // we already have our custom header
      }}
    >
      <Stack.Screen name="Courses" component={CoursesScreen} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
    </Stack.Navigator>
  );
};

export default CoursesStackNavigator;
