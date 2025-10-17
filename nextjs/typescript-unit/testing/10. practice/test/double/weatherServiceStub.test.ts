import { getWeatherReport } from  "@app/double/weatherService";
// 🧪 Stub the weather API
jest.mock('@app/weatherAPI', () => ({
  fetchTemperature: jest.fn(),
}));

import { fetchTemperature } from '@app/weatherAPI';
const mockedFetchTemperature = fetchTemperature as jest.Mock;

describe('Weather Service - Stub Example', () => {
  test('should return "hot" when temperature > 30', async () => {
    mockedFetchTemperature.mockResolvedValue(35);
    const result = await getWeatherReport('Hyderabad');
    expect(result).toBe('Hyderabad is hot 🔥');
  });

  test('should return "cool" when temperature <= 30', async () => {
    mockedFetchTemperature.mockResolvedValue(25);
    const result = await getWeatherReport('Shimla');
    expect(result).toBe('Shimla is cool ❄️');
  });

  test('should handle API failure gracefully', async () => {
    mockedFetchTemperature.mockRejectedValueOnce(new Error('API Down'));
    await expect(getWeatherReport('Delhi')).rejects.toThrow('API Down');
  });
});
