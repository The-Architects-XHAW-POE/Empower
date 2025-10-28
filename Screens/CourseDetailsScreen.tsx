import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Data/types';
import { RouteProp } from '@react-navigation/native';

type CourseDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CourseDetails'>;
type CourseDetailsScreenRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;

const CourseDetailsScreen: React.FC = () => {
  const navigation = useNavigation<CourseDetailsScreenNavigationProp>();
  const route = useRoute<CourseDetailsScreenRouteProp>();
  const { course } = route.params;

  return (
    <View style={{ flex: 1 }}>
      {/* Fixed Header */}
      <Header />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>        
        {/* Course Details */}
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <Text style={styles.price}>R{course.price}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Cart', { course })}
        >
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>← Back</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
    paddingTop: 170,
  },
  backButton: {
    marginBottom: 15,
  },
  backButtonText: {
    fontSize: 16,
    color: '#c68600ff',
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  price: {
    fontSize: 18,
    color: '#c68600ff',
    fontWeight: '700',
    marginBottom: 30,
  },
card: { 
    backgroundColor: '#fff', 
    borderRadius: 12, 
    padding: 12, 
    marginBottom: 14, 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOpacity: 0.08, 
    shadowRadius: 3, 
    shadowOffset: { width: 0, height: 1 }, 
  },    
  btn: { 
    backgroundColor: '#c68600ff', 
    borderRadius: 8, 
    padding: 6, 
    marginTop: 6, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginLeft: 70,
    marginRight: 70,     
  },
  btnText: { color: '#fff', fontWeight: 'bold' },
});

export default CourseDetailsScreen;
