import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Elevated Cards: </Text>
      <ScrollView horizontal style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.tapText}>Scroll →</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tapText}>Scroll →</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tapText}>Scroll →</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tapText}>Scroll →</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tapText}>Scroll →</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tapText}>Scroll →</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tapText}>Scroll →</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tapText}>Scroll →</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tapText}>Scroll →</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tapText}>Scroll →</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
  parent: {
    padding: 15,
  },
  container: {},
  card: {
    width: 120,
    height: 120,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    margin: 5,
    shadowColor: 'white',
    shadowOffset: {width: 4, height: 5},
    shadowOpacity: 0.7,
    elevation: 5,
    padding: 5,
    backgroundColor: '#CAD5E2',
  },
  tapText: {
    fontSize: 25,
    fontWeight: '800',
  },
});
