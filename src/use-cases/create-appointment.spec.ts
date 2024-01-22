import { describe, it, expect } from 'vitest';
import { CreateAppointment } from './create-appointment';
import { Appointment } from '../entities/appointment';


// pode se colocar varios testes
describe('Create Appointment', () => {

  // é o mesmo que colocar 'test'
  it('Shound be able to Create Appointament', () => {
    const createAppointment = new CreateAppointment();
    
    const startsAt = new Date();
    const endsAt   = new Date();

    startsAt.setDate(startsAt.getDate() + 1);
    endsAt.setDate(endsAt.getDate() + 2);

    expect(createAppointment.execute(
      {
        customer : "Fulano",
        startsAt,
        endsAt
      }
    )).resolves.toBeInstanceOf(Appointment);
    // resolves => é o resultado da promisse quando da certo
  });

});

