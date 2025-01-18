import CurrencyListViewItem, { CurrencyItem } from "@/components/currency/CurrencyListViewItem";
import useCurrencyStore from "@/stores/useCurrencyStore";
import React, { useEffect } from "react";
import {
  RefreshControl,
  StyleSheet,
  Text,
  VirtualizedList,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { isLoading, currencies, error, fetchCurrencies } = useCurrencyStore();

  useEffect(() => {
      fetchCurrencies();
  }, []);

  const renderCurrencies = () => {
    if (error) {
      return <Text>Error fetching data. Please try again</Text>;
    }

    if (isLoading) {
      return <Text>Loading data...</Text>;
    }

    return (
      <VirtualizedList
        initialNumToRender={4}
        data={currencies}
        renderItem={({ item, index }) => (
          <CurrencyListViewItem item={item} index={index} />
        )}
        keyExtractor={(currency: CurrencyItem) => currency.id}
        getItemCount={() => currencies.length}
        getItem={(currencies, index) => currencies[index]}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchCurrencies} />
        }
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>{renderCurrencies()}</SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
