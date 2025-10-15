import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';

// Course type and data
type Course = { id: string; title: string; category: string; price: number; description: string };
const COURSES: Course[] = [
  { id: 'first-aid', title: 'First Aid', category: 'Six Month', price: 500, description: 'Comprehensive first aid training covering CPR, wound care, and emergency response.' },
  { id: 'sewing', title: 'Sewing', category: 'Six Month', price: 500, description: 'Hands-on sewing course teaching basic and intermediate garment construction and repair.' },
  { id: 'landscaping', title: 'Landscaping', category: 'Six Month', price: 500, description: 'Practical landscaping skills including plant selection, garden design and maintenance.' },
  { id: 'life-skills', title: 'Life Skills', category: 'Six Month', price: 500, description: 'Life skills course covering budgeting, communication, and job readiness.' },
  { id: 'child-minding', title: 'Child Minding', category: 'Six Week', price: 200, description: 'Short course on child care basics, safety and play-based learning.' },
  { id: 'cooking', title: 'Cooking', category: 'Six Week', price: 200, description: 'Fundamental cooking techniques and kitchen safety for everyday meals.' },
  { id: 'garden-maintenance', title: 'Garden Maintenance', category: 'Six Week', price: 200, description: 'Basic garden maintenance and plant care for small residential gardens.' },
  { id: 'one-month', title: 'One Month Course', category: 'One Month', price: 100, description: 'Short-term focused learning on a specific practical skill.' }
];

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

// Course Details
const CourseDetails = ({ id, onBack }: { id: string; onBack: () => void }) => {
  const course = COURSES.find(c => c.id === id);
  if (!course) return <View style={styles.card}><Text style={styles.cardParagraph}>Course not found</Text></View>;
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{course.title}</Text>
        <Text style={styles.cardParagraph}>{course.description}</Text>
        <Text style={[styles.cardParagraph, { fontWeight: 'bold', marginTop: 8 }]}>Price: ${course.price}</Text>
        <View style={{ flexDirection: 'row', marginTop: 12 }}>
          {/* Add-to-cart removed from details page per request */}
          <TouchableOpacity style={[styles.headerButton, { flex: 1 }]} onPress={onBack}>
            <Text style={styles.headerButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Cart Page (app-level state will be wired in App)
const CartScreenApp = ({ items, onRemove, onOpen }: { items: string[]; onRemove: (id: string) => void; onOpen: (id: string) => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Start selected with unique items from cart
  const [selected, setSelected] = useState<string[]>(() => Array.from(new Set(items)));

  const toggle = (id: string) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  const [subtotal, setSubtotal] = useState<number | null>(null);
  const [vat, setVat] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  const calculate = () => {
    const sum = selected.reduce((s, id) => s + (COURSES.find(c => c.id === id)?.price || 0), 0);
    const v = Math.round(sum * 0.15 * 100) / 100;
    const tot = Math.round((sum + v) * 100) / 100;
    setSubtotal(sum);
    setVat(v);
    setTotal(tot);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Course Selection</Text>

        <Text style={[styles.cardParagraph, { textAlign: 'left', fontWeight: '600', marginTop: 8 }]}>Name</Text>
        <TextInput style={styles.inputBox} value={name} onChangeText={setName} placeholder="Name" />

        <Text style={[styles.cardParagraph, { textAlign: 'left', fontWeight: '600', marginTop: 8 }]}>Email</Text>
        <TextInput style={styles.inputBox} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />

        <Text style={[styles.cardParagraph, { textAlign: 'left', fontWeight: '600', marginTop: 8 }]}>Phone Number</Text>
        <TextInput style={styles.inputBox} value={phone} onChangeText={setPhone} placeholder="Phone" keyboardType="phone-pad" />

        <Text style={[styles.cardTitle, { fontSize: 16, marginTop: 12 }]}>Select Courses</Text>
        {COURSES.map(c => (
          <React.Fragment key={c.id}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 6 }}>
              <Pressable accessibilityRole="checkbox" accessibilityState={{ checked: selected.includes(c.id) }} onPress={() => toggle(c.id)} style={[styles.checkbox, selected.includes(c.id) && styles.checkboxChecked]}>
                {selected.includes(c.id) && <View style={styles.checkboxInner} />}
              </Pressable>
              <TouchableOpacity onPress={() => onOpen(c.id)} style={{ marginLeft: 10 }}>
                <Text style={styles.courseText}>{c.title}</Text>
              </TouchableOpacity>
            </View>
          </React.Fragment>
        ))}

        <TouchableOpacity
          style={[styles.calcButton, !(name && email.includes('@') && phone && selected.length > 0) && styles.calcButtonDisabled]}
          onPress={calculate}
          disabled={!(name && email.includes('@') && phone && selected.length > 0)}
        >
          <Text style={styles.calcButtonText}>Calculate</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 12 }}>
          <Text style={[styles.cardParagraph, { fontWeight: '600', textAlign: 'left' }]}>Subtotal: {subtotal !== null ? `$${subtotal}` : '-'}</Text>
          <Text style={[styles.cardParagraph, { fontWeight: '600', textAlign: 'left' }]}>VAT (15%): {vat !== null ? `$${vat}` : '-'}</Text>
          <Text style={[styles.cardParagraph, { fontSize: 16, fontWeight: '700', marginTop: 10, textAlign: 'left' }]}>Total Amount</Text>
          <Text style={[styles.cardParagraph, { fontSize: 18, fontWeight: '800', marginTop: 6, textAlign: 'left' }]}>{total !== null ? `$${total}` : '-'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Footer Component
const Footer = ({ onNavigate, cartCount }: { onNavigate: (page: 'home' | 'courses' | 'contacts' | 'cart') => void; cartCount?: number }) => (
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
      {cartCount && cartCount > 0 && (
        <View style={styles.cartBadge}>
          <Text style={styles.cartBadgeText}>{cartCount}</Text>
        </View>
      )}
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
const CoursesScreen = ({ onOpen, onAdd }: { onOpen: (id: string) => void; onAdd: (id: string) => void }) => (
  <ScrollView contentContainerStyle={styles.scrollContent}>
    {['Six Month', 'Six Week', 'One Month'].map(category => (
      <React.Fragment key={category}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{category} Courses</Text>
          <Text style={styles.cardParagraph}>
            {category === 'Six Month' && 'This comprehensive course covers a wide range of skills and knowledge over a six-month period. Ideal for those looking to make a significant career change or enhance their existing skills.'}
            {category === 'Six Week' && 'A focused six-week course designed to provide essential skills in just six weeks. Perfect for individuals seeking quick upskilling or reskilling opportunities.'}
            {category === 'One Month' && 'Short-term focused learning on a specific practical skill.'}
          </Text>
          <View style={{ marginTop: 8, marginBottom: 8 }}>
            {COURSES.filter(c => c.category === category).map(course => (
              <React.Fragment key={course.id}>
                <View style={{ marginVertical: 6 }}>
                  <TouchableOpacity onPress={() => onOpen(course.id)} style={styles.courseLinkContainer}>
                    <Text style={styles.courseText}>• {course.title}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.headerButton, { alignSelf: 'flex-start', marginTop: 6 }]} onPress={() => onAdd(course.id)}>
                    <Text style={styles.headerButtonText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </React.Fragment>
            ))}
          </View>
        </View>
      </React.Fragment>
    ))}
  </ScrollView>
);

// Main App Component
const App = () => {
  const [page, setPage] = useState<'home' | 'courses' | 'contacts' | 'cart' | 'details'>('home');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [cart, setCart] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDetails = (id: string) => { setSelectedCourse(id); setPage('details'); };
  const addToCart = (id: string) => {
    setCart(prev => prev.includes(id) ? prev : [...prev, id]);
    // Show toast confirmation instead of navigating to cart
    const course = COURSES.find(c => c.id === id);
    const label = course ? course.title : 'Course';
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = null;
    }
    setToast(`${label} added to cart`);
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
      toastTimeoutRef.current = null;
    }, 2200);
  };
  const removeFromCart = (id: string) => { setCart(prev => prev.filter(i => i !== id)); };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        {page === 'home' && <HomeScreen />}
  {page === 'courses' && <CoursesScreen onOpen={openDetails} onAdd={addToCart} />}
        {page === 'contacts' && <ContactsScreen />}
  {page === 'details' && selectedCourse && <CourseDetails id={selectedCourse} onBack={() => setPage('courses')} />}
  {page === 'cart' && <CartScreenApp items={cart} onRemove={removeFromCart} onOpen={openDetails} />}
        <Footer onNavigate={setPage} cartCount={cart.length} />
        {toast && (
          <View style={styles.toast} pointerEvents="none">
            <Text style={styles.toastText}>{toast}</Text>
          </View>
        )}
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
  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#f00',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  toast: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 100,
    backgroundColor: '#000000cc',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  toastText: {
    color: '#fff',
    fontSize: 14,
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
  calcButtonDisabled: {
    backgroundColor: '#d0d0d0',
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
  courseButton: {
    // legacy button styles removed; kept here as a placeholder in case we revert to buttons
  },
  courseLinkContainer: {
    paddingVertical: 6,
  },
  courseText: {
    color: '#000000ff',
    fontSize: 14,
    textAlign: 'left',
  },
});

export default App;
