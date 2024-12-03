import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Card({ name, price, dailyChange, sym }) {
  const navigation = useNavigation();

  const handlerDetail = () => {
    navigation.navigate('Details', { name, price, dailyChange, sym });
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.dailyChange}>{dailyChange}</Text>

      <TouchableOpacity style={styles.button} onPress={handlerDetail}>
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: 220,
    backgroundColor: "#F8BBD0",
    marginBottom: 20,
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#00796b',
    fontWeight: '600',
    marginBottom: 8,
  },
  dailyChange: {
    fontSize: 16,
    color: '#d32f2f',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#00796b',
    paddingVertical: 12,
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
