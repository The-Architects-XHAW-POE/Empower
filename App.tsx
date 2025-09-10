import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Header Component
const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerRow}>
      {/* Temporary placeholder box for logo */}
      <View style={styles.logoPlaceholder}>
        <Text style={styles.logoPlaceholderText}>LOGO</Text>
      </View>
      <Text style={styles.title}>Empowering the Nation</Text>
    </View>
  </View>
);

// Contacts Page
const ContactsScreen = () => (
  <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Contact Us</Text>
      <Text style={styles.cardParagraph}>
        Get in Touch
      </Text>
        <View style={{ marginTop: 8, marginBottom: 8 }}>
          <Text style={styles.cardParagraph}>• 075 094 2345</Text>
          <Text style={styles.cardParagraph}>• empoweringthenation@gmail.com</Text>
          <Text style={styles.cardParagraph}>• 123 Main Street, City, Country</Text>
        </View>
      <Text style={styles.cardParagraph}>
        Addresses
      </Text>        
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
          latitude: -26.2041, // Example: Johannesburg
          longitude: 28.0473,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: -26.2041, longitude: 28.0473}}
          title="Empowering the Nation"
          description="123 Main Street, Johannesburg"
        />
      </MapView>
    </View>
  </ScrollView>
);

// Cart Page
const CartScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState([false, false, false]);
  const [total, setTotal] = useState(0);

  // Example prices for each course
  const prices = [500, 200, 100];

  const handleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const calculateTotal = () => {
    let sum = 0;
    checked.forEach((isChecked, idx) => {
      if (isChecked) sum += prices[idx];
    });
    setTotal(sum);
  };

  const handleSubmit = () => {
    // Add your submit logic here
    alert('Submitted!');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Cart</Text>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Name:</Text>
          <TextInput
            style={styles.inputBox}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Phone:</Text>
          <TextInput
            style={styles.inputBox}
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone"
            keyboardType="phone-pad"
          />
        </View>
        <View style={{ marginVertical: 12 }}>
          <Text style={[styles.cardParagraph, { textAlign: 'left', marginBottom: 8 }]}>Select Courses:</Text>
          {['Six Month Course ($500)', 'Six Week Course ($200)', 'One Month Course ($100)'].map((label, idx) => (
            <TouchableOpacity
              key={label}
              style={styles.checkboxRow}
              onPress={() => handleCheck(idx)}
              activeOpacity={0.7}
            >
              <View style={[styles.checkbox, checked[idx] && styles.checkboxChecked]}>
                {checked[idx] && <View style={styles.checkboxInner} />}
              </View>
              <Text style={styles.checkboxLabel}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.calcButton} onPress={calculateTotal}>
          <Text style={styles.calcButtonText}>Calculate</Text>
        </TouchableOpacity>
        <Text style={[styles.cardParagraph, { fontWeight: 'bold', fontSize: 16, marginVertical: 10 }]}>
          Total Amount: ${total}
        </Text>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Footer Component
const Footer = ({ onNavigate }: { onNavigate: (page: 'home' | 'courses' | 'contacts' | 'cart') => void }) => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.headerButton} onPress={() => onNavigate('home')}>
      <Text style={styles.headerButtonText}>HOME</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.headerButton} onPress={() => onNavigate('courses')}>
      <Text style={styles.headerButtonText}>COURSES</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.headerButton} onPress={() => onNavigate('contacts')}>
      <Text style={styles.headerButtonText}>CONTACTS</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.headerButton} onPress={() => onNavigate('cart')}>
      <Text style={styles.headerButtonText}>CART</Text>
    </TouchableOpacity>
  </View>
);

// Main Page
const HomeScreen = () => (
  <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>About Us</Text>
      <Text style={styles.cardParagraph}>
        Empowering the Nation is a small-to-mid-size enterprise that strives to provide skills training for people with less opportunities – e.g. domestic workers and gardeners. The founder, Precious Radebe, was inspired to start this initiative after witnessing up-close how the struggles of not receiving formal educational qualifications can affect people and their families; this helped encourage her to provide the education necessary to her community. To assist with this endeavor, a website and an application has been decided is the best way to give people access to the courses the company offers.
      </Text>
    </View>
    <View style={styles.imagesRow}>
      <View style={styles.placeholder}>
        <Text style={styles.imageText}>Image 1</Text>
        <TouchableOpacity style={styles.imageButton} onPress={() => {}}>
          <Text style={styles.imageButtonText}>Button</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.placeholder}>
        <Text style={styles.imageText}>Image 2</Text>
        <TouchableOpacity style={styles.imageButton} onPress={() => {}}>
          <Text style={styles.imageButtonText}>Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
);

// Courses Page
const CoursesScreen = () => (
  <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Six Month Courses</Text>
      <Text style={styles.cardParagraph}>
        This comprehensive course covers a wide range of skills and knowledge over a six-month period. Ideal for those looking to make a significant career change or enhance their existing skills.
        {"\n\n"}Price: $500
      </Text>
      <View style={{ marginTop: 8, marginBottom: 8 }}>
        <Text style={styles.cardParagraph}>• First Aid</Text>
        <Text style={styles.cardParagraph}>• Sewing</Text>
        <Text style={styles.cardParagraph}>• Landscaping</Text>
        <Text style={styles.cardParagraph}>• Life Skills</Text>
      </View>
      <TouchableOpacity style={styles.headerButton} onPress={() => {}}>
        <Text style={styles.headerButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>Six Week Courses</Text>
      <Text style={styles.cardParagraph}>
        A focused  six-week course designed to provide essential skills in just six weeks. Perfect for individuals seeking quick upskilling or reskilling opportunities.
        {"\n\n"}Price: $200
      </Text>
      <View style={{ marginTop: 8, marginBottom: 8 }}>
        <Text style={styles.cardParagraph}>• Child Minding</Text>
        <Text style={styles.cardParagraph}>• Cooking</Text>
        <Text style={styles.cardParagraph}>• Garden Maintenance</Text>
      </View>
      <TouchableOpacity style={styles.headerButton} onPress={() => {}}>
        <Text style={styles.headerButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

// Main App Component
const App = () => {
  const [page, setPage] = useState<'home' | 'courses' | 'contacts' | 'cart'>('home');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        {page === 'home' && <HomeScreen />}
        {page === 'courses' && <CoursesScreen />}
        {page === 'contacts' && <ContactsScreen />}
        {page === 'cart' && <CartScreen />}
        <Footer onNavigate={setPage} />
      </View>
    </SafeAreaView>
  );
};

// Styles for the App
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#242424ff',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    paddingHorizontal: 12,
    paddingTop: 18,
    paddingBottom: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16, // Adds space between logo and title (React Native 0.71+)
    // If gap doesn't work, use marginLeft on title instead
  },
  logoPlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#f7ab07ff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0, // Remove margin so it aligns vertically
    marginRight: 12, // Extra space to the right of logo
  },
  logoPlaceholderText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 32, // Bigger font size
    fontWeight: 'bold',
    color: '#f7ab07ff',
    textAlign: 'left',
    marginBottom: 0,
    flexShrink: 1, // Prevents overflow
  },
  headerButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
    flexWrap: 'wrap',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  placeholder: {
    backgroundColor: '#E8E8E8',
    flex: 1,
    height: 110,
    marginBottom: 6,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    marginHorizontal: 2,
    padding: 6,
  },
  imageText: {
    fontSize: 13,
    marginBottom: 4,
    fontWeight: '400',
  },
  imageButton: {
    backgroundColor: '#f7ab07ff',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 2,
  },
  imageButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#242424ff',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  headerButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 1,
    marginHorizontal: 1,
    minWidth: 55,
    alignItems: 'center',
  },
  headerButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#242424ff',
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
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
    textAlign: 'center',
  },
  cardParagraph: {
    fontSize: 12,
    color: '#444',
    lineHeight: 17,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    width: 70,
    color: '#333',
    fontWeight: '500',
  },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#f7ab07ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: '#f7ab07ff',
    borderColor: '#f7ab07ff',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333',
  },
  calcButton: {
    backgroundColor: '#f7ab07ff',
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  calcButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#242424ff',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
