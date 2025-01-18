import CurrencyDetails from "@/components/currency/CurrencyDetails";
import { useLocalSearchParams } from 'expo-router';

export default function CurrencyDetailsRoute() {
    const params = useLocalSearchParams();
    return <CurrencyDetails {...params} />
}