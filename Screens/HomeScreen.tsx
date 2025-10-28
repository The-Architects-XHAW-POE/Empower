import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Data/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNavigate = (type: 'sixWeek' | 'sixMonth') => {
    navigation.navigate('Courses', { selectedType: type });
    navigation.navigate('Courses', { selectedType: 'sixWeek' });
    navigation.navigate('Courses', { selectedType: 'sixMonth' });    
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Fixed Header */}
      <Header />

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.paragraph}>
            Empowering the Nation is a small-to-mid-size enterprise that strives to provide skills
            training for people with less opportunities – e.g. domestic workers and gardeners.
            The founder, Precious Radebe, was inspired to start this initiative after witnessing
            up-close how the struggles of not receiving formal educational qualifications can affect
            people and their families. This encouraged her to create opportunities for education and
            empowerment in her community.
          </Text>
        </View>

        {/* Course Buttons */}
        <View style={styles.imagesRow}>
          <View style={styles.placeholder}>
            <Text>Six Week Courses</Text>
            <TouchableOpacity style={styles.btn} onPress={() => handleNavigate('sixWeek')}>
              <Text style={styles.btnText}>View Courses</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.placeholder}>
            <Text>Six Month Courses</Text>
            <TouchableOpacity style={styles.btn} onPress={() => handleNavigate('sixMonth')}>
              <Text style={styles.btnText}>View Courses</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    padding: 20,
    paddingTop: 170, // matches header height
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  paragraph: {
    marginTop: 8,
    textAlign: 'center',
    color: '#444',
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  placeholder: {
    backgroundColor: '#E8E8E8',
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#c68600ff',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 6,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
