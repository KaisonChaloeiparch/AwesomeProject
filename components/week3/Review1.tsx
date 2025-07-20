import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Review1() {
  const totalRatings = 25;
  const averageRating = 4.7;
  const ratingDistribution = [15, 5, 3, 1, 1];

  const renderStars = (num: number) => {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += i < num ? '★' : '☆';
    }
    return stars;
  };

  const renderRatingBar = (count: number, index: number) => {
    const barWidth = (count / totalRatings) * 100;
    return (
      <View key={index} style={styles.ratingRow}>
        <Text style={styles.starText}>{renderStars(5 - index)}</Text>
        <View style={styles.barContainer}>
          <View style={[styles.barFill, { width: `${barWidth}%` }]} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={20} color="#EA6A5F" />
        </TouchableOpacity>
        <Text style={styles.title}>Reviews</Text>
        <TouchableOpacity>
          <Text style={styles.replay}>Replay</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content: Split Left (average) & Right (bars) */}
      <View style={styles.mainContent}>
        {/* Left Side: Average Rating */}
        <View style={styles.leftSide}>
          <Text style={styles.average}>{averageRating.toFixed(1)}</Text>
          <Text style={styles.outOf}>out of 5</Text>
        </View>

        {/* Right Side: Rating Bars */}
        <View style={styles.rightSide}>
          {ratingDistribution.map((count, index) => renderRatingBar(count, index))}
          <Text style={styles.totalRatings}>{totalRatings} Ratings</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  replay: {
    color: '#EA6A5F',
    fontSize: 14,
  },
  mainContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSide: {
    flex: 0.4,
    alignItems: 'flex-start',
  },
  average: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#EA6A5F',
    lineHeight: 40,
  },
  outOf: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  rightSide: {
    flex: 0.6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  starText: {
    width: 50,
    color: '#888',
    fontSize: 12,
  },
  barContainer: {
    flex: 1,
    height: 4,
    backgroundColor: '#eee',
    borderRadius: 3,
  },
  barFill: {
    height: '100%',
    backgroundColor: '#EA6A5F',
    borderRadius: 3,
  },
  totalRatings: {
    marginTop: 6,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333',
    fontSize: 12,
  },
});
