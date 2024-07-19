// src/utils/processData.test.js

import { processSessionData } from './processData';

describe('processSessionData', () => {
  it('should merge and validate data correctly', () => {
    const files = [
      { fileName: 'file1.json', data: [{ id: 1, value: 'a' }] },
      { fileName: 'file2.json', data: [{ id: 2, value: 'b' }] },
      { fileName: 'file3.json', data: null },
    ];

    const processedData = processSessionData(files);
    expect(processedData).toEqual([
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
    ]);
  });

  it('should handle files with invalid data format', () => {
    const files = [
      { fileName: 'file1.json', data: [{ id: 1, value: 'a' }] },
      { fileName: 'file2.json', data: null },
    ];

    const processedData = processSessionData(files);
    expect(processedData).toEqual([{ id: 1, value: 'a' }]);
  });
});
