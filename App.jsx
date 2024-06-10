import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SavingsCarousel from './src/Component/SavingsCarousel';
const savingsData = require('./SavingData.json');

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(savingsData.accounts);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Savings Accounts</Text>
      <View style={styles.carouselContainer}>
        <SavingsCarousel data={data} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fbfbf6',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#008c85',
    
  },
  carouselContainer: {
    flex: 1,
  },
});
