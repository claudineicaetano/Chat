const expect = require('expect');

const {isRealString} = require('./validation');

describe('', () => {
  it('should reject non-string values', () => {
    var res = isRealString(200);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var res = isRealString('     bob    ');
    expect(res).toBe(true);
  });
});