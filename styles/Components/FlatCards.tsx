import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Flat Cards:</Text>
      <View style={styles.cardsContainer}>
        <View style={[styles.card, styles.red]}>
          <Text style={styles.innerText}>Red</Text>
        </View>

        <View style={[styles.card, styles.green]}>
          <Text style={styles.innerText}>Green</Text>
        </View>

        <View style={[styles.card, styles.blue]}>
          <Text style={styles.innerText}>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    padding: 15,
  },
  heading: {
    fontSize: 25,
    fontWeight: '800',
    textDecorationLine: 'underline',
    color: 'white',
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 100,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'white',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.7,
    elevation: 8,
  },
  red: {
    backgroundColor: '#EF5354',
  },
  blue: {
    backgroundColor: '#5D3FD3',
  },
  green: {
    backgroundColor: '#097969',
  },
  innerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
});
