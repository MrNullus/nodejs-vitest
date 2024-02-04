import { Appointment } from '../entities/appointment';

export interface Appointments {
  create(appointment : Appointment) : Promisse<void>;
  save(appointment : Appointment)  : Promisse<void>;
}
