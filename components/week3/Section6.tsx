import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Section6() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>
      <Text style={styles.address}>
        218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…
      </Text>
      <Image
        source={require ('@/assets/week3/map.jpg') }// ใส่ URL ของรูปจริงได้ที่นี่
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
});
