'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('123')).toBe('boolean')
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('123xJ@45')).toBe(true);
  });

  it(`should return 'false' for the password with > 16 characters`, () => {
    expect(checkPassword('54678cHsdgj@kfgkH!vjmxc')).toBe(false);
  })

  it(`should'nt accepts russian characters`, () => {
    expect(checkPassword('745hdhhdbрыБаМеч!@fkc')).toBe(false);
  })

  // write more tests here
});
