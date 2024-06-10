import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SavingsCarousel from './src/Component/SavingsCarousel';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/varun01patel/TaskProject/main/SavingData.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data.accounts);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load data');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
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
