import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Header from '../Components/Header';
import { sixMonthCourses, sixWeekCourses, Course } from '../Data/courses';
import { styles } from '../styles';

type CartRouteProp = RouteProp<{ params: { course?: Course } }, 'params'>;

const CartScreen = () => {
  const [cart, setCart] = useState<Course[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [vat, setVat] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  const route = useRoute<CartRouteProp>();

  // Add course from route params if exists
  useEffect(() => {
    if (route.params?.course) {
      const selectedCourse = route.params.course;
      setCart(prev => (prev.find(c => c.id === selectedCourse.id) ? prev : [...prev, selectedCourse]));
      setSelectedCourses(prev => (prev.includes(selectedCourse.id) ? prev : [...prev, selectedCourse.id]));
    }
  }, [route.params]);

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
    setSelectedCourses(prev => prev.filter(courseId => courseId !== id));
  };

  const handleCourseToggle = (id: string) => {
    setSelectedCourses(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let subtotal = 0;
    const allCourses = [...sixMonthCourses, ...sixWeekCourses];
    const count = selectedCourses.length;

    selectedCourses.forEach(id => {
      const courseObj = allCourses.find(c => c.id === id);
      if (courseObj) subtotal += courseObj.price;
    });

    let discountRate = 0;
    if (count === 2) discountRate = 0.05;
    else if (count === 3) discountRate = 0.1;
    else if (count > 3) discountRate = 0.15;

    const discountedTotal = subtotal * (1 - discountRate);
    const vatAmount = discountedTotal * 0.15;
    const finalTotal = discountedTotal + vatAmount;

    setDiscount(discountRate * 100);
    setVat(vatAmount);
    setTotal(finalTotal);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Fixed Header */}
      <Header />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ paddingTop: 120, paddingHorizontal: 20 }}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Cart</Text>

          {/* Discounts */}
          <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', marginVertical: 8 }}>
            Available Discounts
          </Text>
          <Text style={[styles.cardParagraph, { textAlign: 'center' }]}>
            1 course: No discount{"\n"}
            2 courses: 5% discount{"\n"}
            3 courses: 10% discount{"\n"}
            More than 3 courses: 15% discount
          </Text>

          {/* Form */}
          <Text style={[styles.cardParagraph, { fontWeight: '600', marginTop: 12 }]}>Name</Text>
          <TextInput
            style={styles.inputBox}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />

          <Text style={[styles.cardParagraph, { fontWeight: '600', marginTop: 8 }]}>Email</Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />

          <Text style={[styles.cardParagraph, { fontWeight: '600', marginTop: 8 }]}>Phone Number</Text>
          <TextInput
            style={styles.inputBox}
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone"
            keyboardType="phone-pad"
          />

          {/* Course Selection */}
          <Text style={[styles.cardTitle, { fontSize: 16, marginTop: 12 }]}>Select Courses</Text>
          {[...sixMonthCourses, ...sixWeekCourses].map(course => (
            <View key={course.id} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 6 }}>
              <Pressable
                accessibilityRole="checkbox"
                accessibilityState={{ checked: selectedCourses.includes(course.id) }}
                onPress={() => handleCourseToggle(course.id)}
                style={[styles.checkbox, selectedCourses.includes(course.id) && styles.checkboxChecked]}
              >
                {selectedCourses.includes(course.id) && <View style={styles.checkboxInner} />}
              </Pressable>
              <Text style={[styles.courseText, { marginLeft: 10 }]}>{course.title} - R{course.price}</Text>
            </View>
          ))}

          {/* Calculate Total */}
          <TouchableOpacity
            style={[
              styles.calcButton,
              !(name && email.includes('@') && phone && selectedCourses.length > 0) && styles.calcButtonDisabled
            ]}
            onPress={calculateTotal}
            disabled={!(name && email.includes('@') && phone && selectedCourses.length > 0)}
          >
            <Text style={styles.calcButtonText}>Calculate Total</Text>
          </TouchableOpacity>

          {/* Total Section */}
          <View style={{ marginTop: 12 }}>
            <Text style={styles.cardParagraph}>Discount Applied: {discount > 0 ? `${discount}%` : 'None'}</Text>
            <Text style={styles.cardParagraph}>VAT (15%): R{vat.toFixed(2)}</Text>
            <Text style={[styles.cardParagraph, { fontSize: 16, fontWeight: '700', marginTop: 10 }]}>
              Total Amount
            </Text>
            <Text style={[styles.cardParagraph, { fontSize: 18, fontWeight: '800', marginTop: 6 }]}>
              R{total > 0 ? total.toFixed(2) : '0.00'}
            </Text>
          </View>

          {/* Submit */}
          <TouchableOpacity style={styles.submitButton} onPress={() => alert('Form submitted successfully!')}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
