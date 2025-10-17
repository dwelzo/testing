export const connect = async () => {
  console.log('✅ Connected to DB');
};

export const disconnect = async () => {
  console.log('❌ Disconnected from DB');
};

export const clearDB = async () => {
  console.log('🧹 Cleared database');
};

export const getUserFromDB = async (id: number) => {
  console.log('🗄️  Fetching from real database...');
  // Pretend to wait for DB
  await new Promise((r) => setTimeout(r, 200));
  return { id, name: 'RealUser' };
};
