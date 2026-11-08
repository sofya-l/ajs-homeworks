import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('переводит содержимое буфера в строку', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  const result = converter.toString();

  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});