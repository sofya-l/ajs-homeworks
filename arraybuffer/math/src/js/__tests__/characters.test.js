import Magician from '../Magician';
import Daemon from '../Daemon';
  
test('атака мага на второй клетке без дурмана должна быть 90', () => {
  const magician = new Magician(100, 2);

  const result = magician.attack;

  expect(result).toBe(90);
});

test('атака мага на второй клетке с дурманом должна быть 85', () => {
  const magician = new Magician(100, 2);
  magician.stoned = true;

  const result = magician.attack;

  expect(result).toBe(85);
});

test('изменение атаки', () => {
  const magician = new Magician(100, 2);
  magician.attack = 80;

  const result = magician.attack;

  expect(result).toBe(72);
});

test('проверяем дурман', () => {
  const magician = new Magician(100, 2);
  expect(magician.stoned).toBe(false);

  magician.stoned = true;
  expect(magician.stoned).toBe(true);

  magician.stoned = false;
  expect(magician.stoned).toBe(false);
});

test('проверяем демона с дурманом и без', () => {
  const daemon = new Daemon(100, 4);
  expect(daemon.attack).toBe(70);

  daemon.stoned = true;
  expect(daemon.attack).toBe(60);

  daemon.stoned = false;
  expect(daemon.attack).toBe(70);
});