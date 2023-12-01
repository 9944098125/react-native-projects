import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}: any) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.heading}>Hello ! Details Screen 🤠</Text>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#d54225'}]}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.btnText}>GO TO SETTINGS ⚙️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#4ed525'}]}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.btnText}>GO TO HOME 🏠</Text>
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

export default DetailsScreen;
