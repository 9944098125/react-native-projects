import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

function App(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = React.useState(
    useColorScheme() === 'dark',
  );

  const handleModes = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        isDarkMode ? styles.darkContainerBg : styles.lightContainerBg,
      ]}>
      <View style={isDarkMode ? styles.darkBox : styles.whiteBox}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello world !!!
        </Text>
        <Text
          style={[
            isDarkMode ? styles.whiteText : styles.darkText,
            styles.smallFont,
          ]}>
          in {isDarkMode ? 'DARK MODE' : 'LIGHT MODE'}
        </Text>
        <TouchableOpacity
          style={isDarkMode ? styles.darkBtn : styles.lightBtn}
          onPress={handleModes}>
          <Text style={isDarkMode ? styles.darkBtnText : styles.lightBtnText}>
            {isDarkMode ? 'Turn On Light Mode' : 'Turn On Dark Mode'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkBox: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    shadowColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    elevation: 8,
  },
  whiteBox: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    elevation: 5,
  },
  darkText: {
    color: 'black',
    fontSize: 45,
  },
  whiteText: {
    color: 'white',
    fontSize: 45,
  },
  darkContainerBg: {
    backgroundColor: '#000000',
  },
  lightContainerBg: {
    backgroundColor: '#ffffff',
  },
  darkBtn: {
    backgroundColor: 'red',
    color: 'white',
    height: 45,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightBtn: {
    backgroundColor: 'black',
    color: 'white',
    height: 45,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkBtnText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  lightBtnText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  smallFont: {
    fontSize: 20,
    fontWeight: '800',
  },
});

export default App;
