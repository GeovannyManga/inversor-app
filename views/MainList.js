import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import Card from "../components/Card.js";
import { stocks } from "../dummy_stock_data.json";

export default function MainList() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('default');

  useEffect(() => {
    setData(stocks);
  }, []);

  const handleSort = (order) => {
    let sortedData;
    if (order === 'ascending') {
      sortedData = [...data].sort((a, b) => a.price - b.price); 
    } else if (order === 'descending') {
      sortedData = [...data].sort((a, b) => b.price - a.price); 
    } else {
      sortedData = [...data]; 
    }
    setData(sortedData);
    setFilter(order);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterButtons}>
        <Button title="Menor a Mayor" onPress={() => handleSort('ascending')} />
        <Button title="Mayor a Menor" onPress={() => handleSort('descending')} />
      </View>

      <ScrollView style={styles.scrollView}>
        {data ? (
          data.map((d) => (
            <Card key={d.symbol} name={d.name} price={d.price} dailyChange={d.daily_change} sym={d.symbol} />
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  scrollView: {
    marginTop: 10,
  },
});
