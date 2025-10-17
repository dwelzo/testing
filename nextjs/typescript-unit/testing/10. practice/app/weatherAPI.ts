// ✅ Correct version
export const fetchTemperature = async (city: string): Promise<number> => {
  console.log(`🌤️ Fetching temperature for ${city}...`);
  await new Promise((r) => setTimeout(r, 2000));
  return 35;
};
