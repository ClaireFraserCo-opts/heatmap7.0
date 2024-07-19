// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Heatmap title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Heatmap/i);
  expect(titleElement).toBeInTheDocument();
});
