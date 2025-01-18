import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";

export interface CurrencyItem {
  id: string;
  name: string;
  code: string;
  symbol: string;
}

export interface RenderCurrencyProps {
  item: CurrencyItem;
  index: number;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
    flexShrink: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const Separator = () => <View style={styles.separator} />;

const CurrencyListViewItem = ({ item, index }: RenderCurrencyProps) => (
  <View key={index}>
    <View style={styles.container}>
      <Text
        style={styles.title}
        ellipsizeMode="tail"
        numberOfLines={1}
      >{`${item.symbol} ${item.code} ${item.name}`}</Text>
      <Link  href={{
          pathname: '/details',
          params: { ...item }
        }} asChild>   
        <Button title="Details"></Button>
      </Link>
    </View>

    <Separator />
  </View>
);

export default CurrencyListViewItem;
