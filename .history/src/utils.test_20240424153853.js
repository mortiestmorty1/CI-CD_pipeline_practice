const { md5 } = require('./utils');

describe('md5 function', () => {
  it('should generate a correct MD5 hash', () => {
    const inputString = 'TestString';
    const outputHash = '6f8db599de986fab7a21625b7916589c'; // MD5 for 'TestString'
    expect(md5(inputString)).toBe(outputHash);
  });
});
