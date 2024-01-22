  import { test, expect } from 'vitest';
  import { Appointment } from './appointment.ts';

  // test vai ser a função que vai receber o teste
  // test('Title Test', () => console.log('Testeeee'))
test('Create an appointment', () => {
  const startsAt = new Date();
  const endsAt   = new Date();

  startsAt.setDate(startsAt.getDate() + 1);
  endsAt.setDate(endsAt.getDate() + 2);

  const appointment = new Appointment({
    customer : "Fulano",
    startsAt : new Date(),
    endsAt
  });

  // expect vai servir para verificar algo experado
  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("Fulano");

});


test('Cannot create appoint with end date befoe start date', () => {
  const startsAt = new Date();
  const endsAt   = new Date();

  startsAt.setDate(startsAt.getDate() + 2);
  endsAt.setDate(endsAt.getDate() + 1);
 
  expect(() => {
    return new Appointment({
      customer : "Fulano",
      startsAt,
      endsAt,
    });
  }).toThrow();

});

test('Cannot create appoint with start date before now', () => {
  const startsAt = new Date();
  const endsAt   = new Date();

  startsAt.setDate(startsAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() + 1);
 
  expect(() => {
    return new Appointment({
      customer : "Fulano",
      startsAt,
      endsAt,
    });
  }).toThrow();

});


