import { create } from "zustand";

interface CurrencyState {
  isLoading: boolean;
  currencies: Array<object>;
  error: boolean;
  fetchCurrencies: () => void;
}

const BASE_URL = "https://www.freetestapi.com/api/v1";

const useCurrencyStore = create<CurrencyState>((set) => ({
  error: false,
  isLoading: false,
  currencies: [],
  fetchCurrencies: async () => {
    try {
      set({ isLoading: true, error: false });
      console.log('Fetching data from server');
      const response = await fetch(BASE_URL + "/currencies");
      const data = await response.json();
      set({ currencies: data });
      return data;
    } catch (error) {
      console.error("Failed to fetch currencies:", error);
      set({ currencies: [], error: true });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useCurrencyStore;
