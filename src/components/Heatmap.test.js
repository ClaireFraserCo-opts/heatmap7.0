import React from 'react';
import { render, screen } from '@testing-library/react';
import Heatmap from './Heatmap';

const mockData = {
  utterances: [
    { speaker: 'Speaker 1', wordFrequency: 60, density: 6.3, score: 247 },
    { speaker: 'Speaker 2', wordFrequency: 70, density: 8, score: 64 },
    { speaker: 'Speaker 3', wordFrequency: 80, density: 10, score: 50 },
  ],
};

describe('Heatmap Component', () => {
  test('renders Heatmap component without crashing', () => {
    render(<Heatmap data={mockData} />);
    const container = screen.getByTestId('heatmapContainer');
    expect(container).toBeInTheDocument();
  });
});
