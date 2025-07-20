import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Section5() {
  const icons = [
    { name: 'wifi', label: 'wifi' },
    { name: 'coffee', label: 'coffee' },
    { name: 'bath', label: 'bath' },
    { name: 'car', label: 'car' },
    { name: 'paw', label: 'paw' },
  ];

  return (
    <View style={styles.container}>
      {icons.map((item, index) => (
        <View key={index} style={styles.iconContainer}>
          <FontAwesome5 name={item.name} size={24} color="#5d8aa8" />
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
     backgroundColor: 'white', // ✅ เพิ่มบรรทัดนี้
  },
  iconContainer: {
    alignItems: 'center',
  },
  label: {
    marginTop: -5,
    fontSize: 12,
    color: '#aaa',
  },
});
