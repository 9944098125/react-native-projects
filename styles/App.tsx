import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCard from './Components/FancyCard';
import ActionCard from './Components/ActionCard';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={!isDarkMode && styles.grandParentContainer}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  grandParentContainer: {
    flex: 1,
    backgroundColor: '#080808',
  },
});
