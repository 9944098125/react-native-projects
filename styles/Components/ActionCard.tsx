import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openLink(url: string) {
    Linking.openURL(url);
  }

  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Blog Card:</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 2021 ? - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
          }}
          style={styles.image}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>Importance of Java Script</Text>
          <Text numberOfLines={2} style={styles.description}>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the
            client side for webpage behavior, often incorporating third-party
            libraries.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openLink(
                'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
              )
            }
            style={[styles.linkButton, {backgroundColor: 'blue'}]}>
            <Text style={{color: 'white'}}>Know more...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openLink(
                'https://linkedin.com/in/srinivas-prasad-akella-6abb28195',
              )
            }
            style={[styles.linkButton, {backgroundColor: 'deeppink'}]}>
            <Text style={{color: 'white'}}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  card: {
    minHeight: 500,
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  elevatedCard: {
    borderRadius: 15,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#080808',
  },
  image: {
    height: 400,
    borderRadius: 15,
    marginBottom: 10,
  },
  bodyContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
  },
  description: {
    fontSize: 15,
  },
  footerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  linkButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 10,
  },
});
