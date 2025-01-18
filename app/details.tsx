import CurrencyDetails from "@/components/currency/CurrencyDetails";
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';

export default function CurrencyDetailsRoute() {
    const params = useLocalSearchParams();
    return <CurrencyDetails {...params} />
}