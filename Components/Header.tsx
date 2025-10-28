import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';

const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerRow}>
      <Image source={require('../image/XhawLogo.jpg')} style={styles.logoImage} />
      <Text style={styles.title}>Empowering the Nation</Text>
    </View>
  </View>
);

export default Header;
