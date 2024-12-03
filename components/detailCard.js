import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DetailCard({ name, price, dailyChange, sym }) {
  const navigation = useNavigation();

  const handlerDetail = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.dailyChange}>{dailyChange}</Text>
      <Text style={styles.symbol}>{sym}</Text>

      <TouchableOpacity style={styles.button} onPress={handlerDetail}>
        <Text style={styles.buttonText}>Go to Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "80%",
    backgroundColor: "#F8BBD0", 
    marginBottom: 20,
    borderRadius: 20, 
    padding: 15, 
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    elevation: 5, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10, 
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00796b', 
    marginBottom: 8,
  },
  dailyChange: {
    fontSize: 16,
    color: '#d32f2f', 
    marginBottom: 8,
  },
  symbol: {
    fontSize: 16,
    fontWeight: '500',
    color: '#757575',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00796b',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25, 
    elevation: 3,  
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
