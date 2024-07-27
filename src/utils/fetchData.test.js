// src/utils/fetchData.test.js

import { fetchData } from './fetchData';

global.fetch = jest.fn();

describe('fetchData', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should fetch and process data correctly', async () => {
    const fileList = ['file1.json', 'file2.json'];
    const file1Data = [{ id: 1, value: 'a' }];
    const file2Data = [{ id: 2, value: 'b' }];

    fetch
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(fileList) })
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(file1Data) })
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(file2Data) });

    const data = await fetchData();
    expect(data).toEqual([
      { fileName: 'file1.json', data: file1Data },
      { fileName: 'file2.json', data: file2Data },
    ]);
    expect(fetch).toHaveBeenCalledTimes(3);
    expect(fetch).toHaveBeenCalledWith('/data/fileList.json');
    expect(fetch).toHaveBeenCalledWith('/data/file1.json');
    expect(fetch).toHaveBeenCalledWith('/data/file2.json');
  });

  it('should handle fetch errors gracefully', async () => {
    fetch
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(['file1.json']) })
      .mockResolvedValueOnce({ ok: false, status: 404 });

    const data = await fetchData();
    expect(data).toEqual([{ fileName: 'file1.json', data: null }]);
    expect(fetch).toHaveBeenCalledTimes(2);
  });
});
