import { Course } from './courses';

export type RootStackParamList = {
  Home: undefined;
  Courses: { selectedType?: 'sixWeek' | 'sixMonth' }; 
  CourseDetails: { course: Course };
  Cart: { course?: Course };
};
