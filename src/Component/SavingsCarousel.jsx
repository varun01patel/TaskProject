import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SavingsCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAccountChange = (index) => {
    setCurrentIndex(index);
  };

  const account = data[currentIndex];

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header]}>Product</Text>
          <Text style={[styles.cell, styles.text]}>{account.product}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header]}>Interest Rate</Text>
          <Text style={[styles.cell, styles.text]}>{account.interestRate}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header]}>Minimum Deposit</Text>
          <Text style={[styles.cell, styles.text]}>{account.minimumDeposit}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header]}>Interest Type</Text>
          <Text style={[styles.cell, styles.text]}>{account.interestType}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {data.map((item, index) => (
          index !== currentIndex && (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleAccountChange(index)}
            >
              <Icon name="bank" size={20} color="#e4efee" />
              <Text style={styles.buttonText}>{item.product}</Text>
            </TouchableOpacity>
          )
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbfbf6',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    backgroundColor: '#008c85',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cell: {
    flex: 1,
    padding: 8,
    fontSize: 20,
    lineHeight: 36,
  },
  text: {
    color: '#ffffff',
  },
  header: {
    fontWeight: 'bold',
    backgroundColor: '#f1f1f1',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8c6300',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#e4efee',
    marginLeft: 8,
    fontWeight: 'bold',
  },
});

export default SavingsCarousel;
