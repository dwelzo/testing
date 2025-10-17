import { fetchTemperature } from "../weatherAPI";

export const getWeatherReport = async (city: string): Promise<string> => {
  const temp = await fetchTemperature(city);
  return temp > 30 ? `${city} is hot 🔥` : `${city} is cool ❄️`;
};

// ❌ Incorrect version
// export const getWeatherReport = async (city: string): Promise<string> => {
//   const temp = await fetchTemperature(city);
//   return `${city} has temperature ${temp}`;
// };
