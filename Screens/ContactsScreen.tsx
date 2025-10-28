import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import MapView, { Marker } from 'react-native-maps';
import { styles } from '../styles'; // Assuming you have card, cardTitle, cardParagraph defined here

const ContactsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Fixed Header */}
      <Header />

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: 170 }]}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact Us</Text>
          <Text style={styles.cardParagraph}>Get in Touch</Text>
          <View style={{ marginTop: 8, marginBottom: 8 }}>
            <Text style={styles.cardParagraph}>• 075 094 2345</Text>
            <Text style={styles.cardParagraph}>• empoweringthenation@gmail.com</Text>
            <Text style={styles.cardParagraph}>• 123 Main Street, City, Country</Text>
          </View>
          <Text style={styles.cardParagraph}>Addresses</Text>
          <View style={{ marginTop: 8, marginBottom: 8 }}>
            <Text style={styles.cardParagraph}>• 456 Elm Street, Johannesburg, South Africa</Text>
            <Text style={styles.cardParagraph}>• 789 Oak Avenue, Johannesburg, South Africa</Text>
            <Text style={styles.cardParagraph}>• 123 Main Street, Johannesburg, South Africa</Text>
          </View>
        </View>

        <Text style={{ textAlign: 'center', marginBottom: 8 }}>Our Location</Text>
        <View style={{ height: 200, borderRadius: 12, overflow: 'hidden', marginBottom: 20 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: -26.2041,
              longitude: 28.0473,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            <Marker
              coordinate={{ latitude: -26.2041, longitude: 28.0473 }}
              title="Empowering the Nation"
              description="123 Main Street, Johannesburg"
            />
          </MapView>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactsScreen;
