import Validator from '../Validator';

describe('Validator', () => {
  const validator = new Validator();

  describe('validateUsername', () => {
    test.each([
      ['Alex', true],
      ['A', true],
      ['John-Doe', true],
      ['John_Doe', true],
      ['John123Doe', true],
      ['John12-34Doe', true],

      ['', false],

      ['1John', false],
      ['_John', false],
      ['-John', false],

      ['John1', false],
      ['John_', false],
      ['John-', false],

      ['John1234Doe', false],
      ['John12345Doe', false],

      ['Jo@hn', false],
      ['John Doe', false],
      ['John.Doe', false],
      ['Джон', false],
    ])('для имени %p возвращает %p', (username, expected) => {
      expect(validator.validateUsername(username)).toBe(expected);
    });

    test.each([
      null,
      undefined,
      123,
      {},
      [],
    ])('для значения %p возвращает false', (username) => {
      expect(validator.validateUsername(username)).toBe(false);
    });
  });
});