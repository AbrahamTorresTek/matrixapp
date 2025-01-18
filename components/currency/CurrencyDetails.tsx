import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface currencyDetails {
  symbol: string,
  name: string,
  code: string,
  description: string;
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  itemDispaly: {
    marginVertical: 5
  }
});

const CurrencyDetails = (props: currencyDetails) => (
  <View style={styles.container}>
    <Text style={styles.itemDispaly}>{props.symbol}</Text>
    <Text style={styles.itemDispaly}>{props.code}</Text>
    <Text style={styles.itemDispaly}>{props.name}</Text>
    <Text style={styles.itemDispaly}>{props.description}</Text>
  </View>
);

export default CurrencyDetails;