import { describe, it, expect } from 'vitest';
import { CreateAppointment } from './create-appointment';
import { Appointment } from '../entities/appointment';
import { getFutureDate } from '../tests/utils/get-future-date';


// pode se colocar varios testes
describe('Create Appointment', () => {

  // é o mesmo que colocar 'test'
  it('Shound be able to Create Appointament', () => {
    const createAppointment = new CreateAppointment();
    
    const startsAt = getFutureDate('2022-05-05');
    const endsAt   = getFutureDate('2022-05-06');

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

