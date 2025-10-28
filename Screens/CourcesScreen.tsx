import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { sixMonthCourses, sixWeekCourses, Course } from '../Data/courses';
import Header from '../Components/Header';
import { styles } from '../styles';
import { RootStackParamList } from '../Data/types';

type CoursesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Courses'>;
type CoursesScreenRouteProp = RouteProp<RootStackParamList, 'Courses'>;

const CoursesScreen: React.FC = () => {
  const navigation = useNavigation<CoursesScreenNavigationProp>();
  const route = useRoute<CoursesScreenRouteProp>();

  // 'all' shows everything initially
  const [visibleType, setVisibleType] = useState<'sixMonth' | 'sixWeek' | 'all'>('all');

  useEffect(() => {
    if (route.params?.selectedType) {
      setVisibleType(route.params.selectedType);
    }
  }, [route.params]);

  const handleCoursePress = (course: Course) => {
    navigation.navigate('CourseDetails', { course });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />

      <ScrollView contentContainerStyle={{ paddingTop: 170, paddingHorizontal: 20 }}>
        <View style={styles.card}>
          <Text style={styles.cardsTitle}>Courses</Text>
          <Text style={styles.cardParagraph}>
            Explore our range of courses designed to empower you with new skills and knowledge.
          </Text>

          {/* --- Filter Buttons --- */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15 }}>
            <TouchableOpacity
              style={[
                styles.headerButton,
                visibleType === 'sixMonth' && { backgroundColor: '#c68600ff' },
              ]}
              onPress={() => setVisibleType('sixMonth')}
            >
              <Text
                style={[
                  styles.headerButtonText,
                  visibleType === 'sixMonth' && { color: '#fff' },
                ]}
              >
                Six Month
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.headerButton,
                visibleType === 'sixWeek' && { backgroundColor: '#c68600ff' },
              ]}
              onPress={() => setVisibleType('sixWeek')}
            >
              <Text
                style={[
                  styles.headerButtonText,
                  visibleType === 'sixWeek' && { color: '#fff' },
                ]}
              >
                Six Week
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.headerButton,
                visibleType === 'all' && { backgroundColor: '#c68600ff' },
              ]}
              onPress={() => setVisibleType('all')}
            >
              <Text
                style={[
                  styles.headerButtonText,
                  visibleType === 'all' && { color: '#fff' },
                ]}
              >
                All
              </Text>
            </TouchableOpacity>
          </View>

          {/* --- Six Month Courses --- */}
          {(visibleType === 'all' || visibleType === 'sixMonth') && (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Six Month Courses</Text>
              <Text style={styles.cardParagraph}>
                This comprehensive course covers a wide range of skills over six months.
              </Text>
              {sixMonthCourses.map(course => (
                <View key={course.id} style={{ marginVertical: 6 }}>
                  <TouchableOpacity onPress={() => handleCoursePress(course)}>
                    <Text style={styles.courseText}>• {course.title}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}

          {/* --- Six Week Courses --- */}
          {(visibleType === 'all' || visibleType === 'sixWeek') && (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Six Week Courses</Text>
              <Text style={styles.cardParagraph}>
                Focused courses providing essential skills in six weeks.
              </Text>
              {sixWeekCourses.map(course => (
                <View key={course.id} style={{ marginVertical: 6 }}>
                  <TouchableOpacity onPress={() => handleCoursePress(course)}>
                    <Text style={styles.courseText}>• {course.title}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CoursesScreen;
