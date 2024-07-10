import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const CurrencyConvertion = () => {
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState("EUR");
    const [exchangeRate, setExchangeRate] = useState(0);
    const [amount, setAmount] = useState(1);
    const [currencies, setCurrencies] = useState([]);
    const convertCurrency = () => {
        // Check if amount is a valid number
        if (isNaN(amount)) {
            return "Invalid amount";
        }
        // Check if exchangeRate is available
        if (isNaN(exchangeRate)) {
            return "Exchange rate not available";
        }
        // Calculate the converted amount
        let result = (amount * exchangeRate).toFixed(2);
        return result;
    };
    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get("https://v6.exchangerate-api.com/v6/f3301e9ab423a82efad6f8c6/latest/USD");
                const data = response.data; // Access the data property of the response
                setCurrencies(Object.keys(data.conversion_rates));
                setExchangeRate(data.conversion_rates[toCurrency]);
                console.log("Hi ima hereaa", data.conversion_rates[toCurrency]);
            } catch (error) {
                console.log("Error fetching currencies", error);
            }
        };
        fetchCurrencies();
    }, [toCurrency]);
    
    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await axios.get(`https://v6.exchangerate-api.com/v6/f3301e9ab423a82efad6f8c6/latest/${fromCurrency}`);
                const data = response.data; // Access the data property of the response
                console.log("Hi ima data", data);
                setExchangeRate(data.conversion_rates[toCurrency]);
            } catch (error) {
                console.log("Error fetching exchange rate", error);
            }
        };
        fetchExchangeRate();
    }, [fromCurrency, toCurrency]);
    return (
<View style={styles.container}>
<Text style={styles.title}>Currency Converter</Text>
<TextInput
    style={styles.input}
    value={amount ? amount.toString() : ''}
    onChangeText={(text) => {
        // Replace commas with dots for cross-platform consistency
        text = text.replace(',', '.');
        // Ensure text is a valid number or empty string
        const isValidNumber = /^-?\d*\.?\d*$/.test(text);
        if (isValidNumber || text === '') {
            setAmount(text); // No need to parseFloat here
        }
    }}
    keyboardType="numeric"
/>

<View style={styles.pickerContainer}>
<Picker
style={styles.picker}
selectedValue={fromCurrency}
onValueChange={(itemValue) => setFromCurrency(itemValue)}>

{currencies.map((currency, index) => (
<Picker.Item key={index} label={currency} value={currency} />
))}
</Picker>

<Picker
style={styles.picker}
    selectedValue = { toCurrency }
    onValueChange = {(itemValue) => setToCurrency(itemValue)
}>
    {currencies.map((currency, index) => (
        <Picker.Item key={index} label={currency} value={currency} />
    ))}
</Picker >
</View >
    <Text style={styles.result}>
        {amount} {fromCurrency} = {convertCurrency()} {toCurrency}
    </Text>
</View >
);
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignitems: 'center',
        justifyContent: 'center',
        backgroundColor: "black",
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 28,
        color:'#fff',
        left:80
    },
    input: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '80%',
        fontSize: 16,
        color:"#fff",
        left:40
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 150,
        backgroundColor:"#fff",
        color:"#000"
    },
    picker: {
        flex: 1,
        height: 50,
        marginHorizontal: 10,
        color:"#000"

    },
    result: {
        fontSize: 25,
        marginTop: 200,
        fontweight: 'bold',
        color:"#fff",
        textAlign:"center"
},
});
export default CurrencyConvertion;