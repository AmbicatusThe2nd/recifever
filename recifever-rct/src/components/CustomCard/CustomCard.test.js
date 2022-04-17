import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomCard from './CustomCard';

describe('<CustomCard />', () => {
  test('it should mount', () => {
    render(<CustomCard />);
    
    const customCard = screen.getByTestId('CustomCard');

    expect(customCard).toBeInTheDocument();
  });
});