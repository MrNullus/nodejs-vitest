import { Appointment } from '../entities/appointment';

interface Request {
  customer : string;
  startsAt : Date;
  endsAt   : Date;
}

type Response = Appointment;


class CreateAppointment 
{
  async execute(
    { 
      customer, 
      startsAt, 
      endsAt 
    } : Request
  ) : Promisse<Response>
  {
    const appointment = new Appointment({ 
      customer, 
      startsAt, 
      endsAt 
    });

    return appointment;
  }
}

export { CreateAppointment };
