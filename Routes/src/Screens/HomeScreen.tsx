import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.heading}>Hello! Home Screen 😇</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={[styles.btn, {backgroundColor: '#ac25d5'}]}>
          <Text style={styles.btnText}>GO TO DETAILS 📇</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={[styles.btn, {backgroundColor: '#25a6d5'}]}>
          <Text style={styles.btnText}>GO TO SETTINGS ⚙️</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    gap: 25,
  },
  heading: {
    fontSize: 25,
    fontWeight: '800',
    color: 'grey',
  },
  btn: {
    borderRadius: 9,
    height: 42,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20,
  },
});

export default HomeScreen;
