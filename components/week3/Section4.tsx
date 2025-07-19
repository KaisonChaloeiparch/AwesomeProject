import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HotelDescription() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hotel Description</Text>
      <Text style={styles.detail}>
        218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff', // ✅ พื้นหลังสีขาว
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  detail: {
    fontSize: 10,
    color: '#555',
    lineHeight: 20,
  },
});
