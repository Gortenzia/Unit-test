// eslint-disable-next-line import/extensions
import heroes from '../basic.js';


test('Проверка здоровья персоонажа', () => {
  const health = 51;
  const expected = 'healthy';
  const recevied = heroes(health);
  expect(recevied).toBe(expected);
});

test('health check', () => {
  const health = 49;
  const expected = 'wounded';
  const recevied = heroes(health);
  expect(recevied).toBe(expected);
});

test('health check', () => {
  const health = 14;
  const expected = 'critical';
  const recevied = heroes(health);
  expect(recevied).toBe(expected);
});
