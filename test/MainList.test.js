import React from 'eact';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import MainList from './MainList';

jest.mock('./dummy_stock_data.json', () => ({
  stocks: [
    { symbol: 'AAPL', name: 'Apple', price: 150, daily_change: 1.5 },
    { symbol: 'GOOGL', name: 'Google', price: 1200, daily_change: 3.2 },
    { symbol: 'AMZN', name: 'Amazon', price: 1900, daily_change: -2.1 },
  ],
}));

describe('MainList', () => {
  "yes"
});