import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Section3() {
  return (
    <View style={styles.row}>
      {/* วงกลมคะแนน */}
      <View style={styles.scoreCircle}>
        <Text style={styles.scoreText}>9.5</Text>
      </View>

      {/* ข้อความ */}
      <View style={styles.textGroup}>
        <Text style={styles.excellent}>Excellent</Text>
        <Text style={styles.reviews}>See 801 reviews</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  scoreCircle: {
    width: 60,
    height: 60,
    borderRadius: 30, // ทำให้เป็นวงกลม
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  scoreText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  textGroup: {
    justifyContent: 'center',
  },
  excellent: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviews: {
    fontSize: 14,
    color: '#888',
  },
});
