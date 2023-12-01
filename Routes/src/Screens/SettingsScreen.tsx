import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SettingsScreen = ({navigation}: any) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.heading}>Hello ! Settings Screen ⚙️</Text>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#1079b0'}]}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>GO TO HOME 🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#d55425'}]}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>GO TO DETAILS 📇</Text>
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

export default SettingsScreen;
