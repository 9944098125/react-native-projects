import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      name: 'Marie Jason',
      profileLink: '/1',
      occupation: 'Computer Engineer',
      imageURL:
        'https://indianwomennetwork.com/wp-content/uploads/2022/02/slider-women-final-1.png',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      profileLink: '/2',
      occupation: 'French Translator',
      imageURL:
        'https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg',
    },
    {
      id: 3,
      name: 'Peter Joke',
      profileLink: '/3',
      occupation: 'Software Developer',
      imageURL:
        'https://www.realmenrealstyle.com/wp-content/uploads/2023/08/Attractive-Older-Men-Are-Confident.jpg',
    },
    {
      id: 4,
      name: 'Wilson Jay',
      profileLink: '/4',
      occupation: 'Senior Software Developer',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl44ol19eLvqW_Mc3ccgvN4QGp2tjt-tnFPA&usqp=CAU',
    },
  ];

  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Contacts List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map((eachContact, idx) => {
          return (
            <View style={styles.eachItemContainer} key={idx}>
              <Image
                source={{uri: eachContact.imageURL}}
                style={styles.eachImage}
              />
              <View style={styles.textContainer}>
                <Text style={[styles.eachText, {fontSize: 25}]}>
                  {eachContact.name}
                </Text>
                <Text
                  style={[
                    styles.eachText,
                    {fontSize: 21, textDecorationLine: 'underline'},
                  ]}>
                  {eachContact.occupation}
                </Text>
              </View>
            </View>
          );
        })}
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
  eachItemContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#0437F2',
  },
  eachImage: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    borderColor: 'white',
    borderWidth: 5,
  },
  eachText: {
    color: 'white',
    fontWeight: '800',
  },
  textContainer: {
    width: '50%',
  },
  btnText: {
    fontSize: 15,
    color: '#0800808',
    fontWeight: '800',
  },
  link: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
