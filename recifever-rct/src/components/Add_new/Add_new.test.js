import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Add_new from './Add_new';

describe('<Add_new />', () => {
  test('it should mount', () => {
    render(<Add_new />);
    
    const addNew = screen.getByTestId('Add_new');

    expect(addNew).toBeInTheDocument();
  });
});