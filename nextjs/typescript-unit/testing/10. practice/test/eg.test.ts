describe('Examples of expect()', () => {
  it('checks equality', () => {
    expect(5 + 5).toBe(10);
  });

  it('checks deep equality', () => {
    expect({ a: 1 }).toEqual({ a: 1 });
  });

  it('checks array inclusion', () => {
    expect(['red', 'green', 'blue']).toContain('green');
  });

  it('checks for thrown error', () => {
    const bad = () => { throw new Error('Oops!'); };
    expect(bad).toThrow('Oops!');
  });
});
