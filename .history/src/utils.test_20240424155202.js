const { md5 } = require('./utils');

describe('md5 function', () => {
  it('should generate a correct MD5 hash for the word "hello"', () => {
    const inputString = 'hello';
    const expectedHash = '5d41402abc4b2a76b9719d911017c592';
    expect(md5(inputString)).toBe(expectedHash);
  });
});
