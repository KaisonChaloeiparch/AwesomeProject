import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Section8() {
  return (
    <View style={styles.rowContainer}>
      {/* Left Side - Text Column */}
      <View style={styles.textColumn}>
        <Text style={styles.line}>Standard Twin Room</Text>
        <Text style={styles.line}>$399.99</Text>
        <Text style={styles.line}>Only 1 room left!</Text>
      </View>

      {/* Right Side - Button */}
      <View>
        <Button title="Book Now" onPress={() => alert('Booked!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  textColumn: {
    flexDirection: 'column',
  },
  line: {
    fontSize: 14,
    marginBottom: 4,
  },
});
