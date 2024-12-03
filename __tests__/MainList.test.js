import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import MainList from '../views/MainList'; 



jest.mock('../dummy_stock_data.json', () => ({
  stocks: [
    { symbol: 'AAPL', name: 'Apple', price: 150, daily_change: 1.5 },
    { symbol: 'GOOGL', name: 'Google', price: 1200, daily_change: 3.2 },
    { symbol: 'AMZN', name: 'Amazon', price: 1900, daily_change: -2.1 },
  ],
}));

describe('MainList', () => {
  it('should render cards correctly and apply sorting', async () => {
    const { getByText, getAllByText } = render(<MainList />);


    await waitFor(() => {
      expect(getByText('Apple')).toBeTruthy();
      expect(getByText('Google')).toBeTruthy();
      expect(getByText('Amazon')).toBeTruthy();
    });

   
    expect(getByText('$150')).toBeTruthy();
    expect(getByText('$1200')).toBeTruthy();
    expect(getByText('$1900')).toBeTruthy();

   
    const ascendingButton = getByText('Menor a Mayor');
    const descendingButton = getByText('Mayor a Menor');


    fireEvent.press(ascendingButton);

   
    const pricesAscending = getAllByText(/\$\d+/).map((el) => el.props.children);
    expect(pricesAscending).toEqual(['$150', '$1200', '$1900']);


    fireEvent.press(descendingButton);

  
    const pricesDescending = getAllByText(/\$\d+/).map((el) => el.props.children);
    expect(pricesDescending).toEqual(['$1900', '$1200', '$150']);
  });
});
