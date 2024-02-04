import { test, expect } from 'vitest';
import { Appointment } from './appointment.ts';
import { getFutureDate } from '../tests/utils/get-future-date';

// test vai ser a função que vai receber o teste
// test('Title Test', () => console.log('Testeeee'))
test('Create an appointment', () => {
  const startsAt = getFutureDate('2022-05-05');
  const endsAt   = getFutureDate('2022-05-06');

  const appointment = new Appointment({
    customer : "Fulano",
    startsAt : startsAt,
    endsAt   : endsAt
  });

  // expect vai servir para verificar algo experado
  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("Fulano");

});


test('Cannot create appoint with end date befoe start date', () => {
  const startsAt = getFutureDate('2022-05-05');
  const endsAt   = getFutureDate('2022-05-04');
 
  expect(() => {
    return new Appointment({
      customer : "Fulano",
      startsAt,
      endsAt,
    });
  }).toThrow();

});

test('Cannot create appoint with start date before now', () => {
  const startsAt = getFutureDate('2022-05-03');
  const endsAt   = getFutureDate('2022-05-05');
 
  expect(() => {
    return new Appointment({
      customer : "Fulano",
      startsAt,
      endsAt,
    });
  }).toThrow();

});


