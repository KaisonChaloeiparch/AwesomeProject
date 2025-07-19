import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ReviewCard() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.circle}>
            <Text style={styles.scoreText}>9.5</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.statusText}>Excellent</Text>
            <Text style={styles.reviewText}>See 801 reviews</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: -18,
  },
  container: {
    width: '100%', // ✅ เต็มจอ
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#EA6C4E',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  scoreText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textBox: {
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 16,
    color: '#EA6C4E',
    fontWeight: '500',
  },
  reviewText: {
    fontSize: 14,
    color: '#555',
  },
});
