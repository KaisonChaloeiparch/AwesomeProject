import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Section7() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Room Type</Text>

      <View style={styles.card}>
        <Image
          source={require ('@/assets/week3/room-8.jpg')} // เปลี่ยน path ให้ตรงกับไฟล์จริง
          style={styles.image}
        />

        <View style={styles.details}>
          <Text style={styles.roomName}>Standard Twin Room</Text>
          <Text style={styles.price}>$399.99</Text>
          <Text style={styles.warning}>Hurry Up! This is your last room!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
  },
  details: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#4CAF50',
  },
  warning: {
    fontSize: 14,
    color: '#E53935',
    fontWeight: 'bold',
  },
});
