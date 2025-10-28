import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen';
import ContactsScreen from '../Screens/ContactsScreen';
import CartScreen from '../Screens/CartScreen';
import CoursesStackNavigator from './CoursesStackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#242424ff',
          paddingTop: 5,
          paddingBottom: 5,
          height: 70,
        },
        tabBarActiveTintColor: '#c68600ff',
        tabBarInactiveTintColor: '#fff',
        tabBarIcon: ({ color, size }) => {
          let iconName: any = 'home';
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Courses') iconName = 'book';
          else if (route.name === 'Contacts') iconName = 'call';
          else if (route.name === 'Cart') iconName = 'cart';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Courses"
        component={CoursesStackNavigator}
        options={{ tabBarLabel: 'Courses' }}
      />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabNavigator;
