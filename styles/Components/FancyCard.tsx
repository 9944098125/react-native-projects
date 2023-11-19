import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <ScrollView style={styles.parent}>
      <Text style={styles.heading}>Trending Place:</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://cdn.enjoytravel.com/img/travel-news/eiffel-tower.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>
            Immersive experiences at Eiffel Tower
          </Text>
          <Text style={styles.cardDescription}>
            At Each Floor of the Eiffel Tower, you can have an immersive
            experience with your smartphones in the company of Gustave Eiffel.
          </Text>
          <Text style={styles.cardFooter}>12 minutes ago...</Text>
        </View>
      </View>
    </ScrollView>
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
  card: {
    minHeight: 500,
    width: '100%',
    elevation: 7,
    marginBottom: 50,
    backgroundColor: 'white',
    paddingBottom: 50,
    borderRadius: 15,
  },
  elevatedCard: {
    borderWidth: 3,
    borderColor: 'white',
  },
  cardImage: {
    height: '70%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardBody: {
    // flex: 1,
    // flexGrow: 1,
  },
  cardTitle: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 6,
  },
  cardDescription: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 8,
  },
  cardFooter: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '800',
  },
});
