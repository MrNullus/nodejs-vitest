import { getFutureDate } from './get-future-date';
import { test, expect } from 'vitest';


test('Increase in date with one yeat', () => {
  const year = new Date().getFullYear();

  expect(getFutureDate(`${year}-05-05`)).getFullYear(2023).toEqual(20023);
});

