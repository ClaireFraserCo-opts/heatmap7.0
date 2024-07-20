import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

const mockFileList = ['file1.json', 'file2.json'];
const mockFileContent = {
  utterances: [
    { speaker: 'Speaker 1', wordFrequency: 60, density: 6.3, score: 247 },
    { speaker: 'Speaker 2', wordFrequency: 70, density: 8, score: 64 },
    { speaker: 'Speaker 3', wordFrequency: 80, density: 10, score: 50 },
  ],
};

describe('App Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({ data: mockFileList });
  });

  test('renders App component without crashing', () => {
    render(<App />);
    expect(screen.getByText('Heatmap Visualization')).toBeInTheDocument();
  });

  test('loads and displays file list', async () => {
    render(<App />);
    expect(await screen.findByText('file1.json')).toBeInTheDocument();
    expect(await screen.findByText('file2.json')).toBeInTheDocument();
  });

  test('loads and displays file content when a file is selected', async () => {
    axios.get.mockResolvedValueOnce({ data: mockFileContent });
    render(<App />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'file1.json' } });
    expect(await screen.findByText(/"speaker": "Speaker 1"/)).toBeInTheDocument();
  });
});
