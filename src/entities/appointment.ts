
export interface AppointmentProps {

  customer : string;
  startsAt : Date;
  endsAt   : Date;

}


export class Appointment {

  private props : AppointmentProps;


  get customer() {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props : AppointmentProps) {
    const now = new Date();

    // Validação da data inicial:
    if (props.startsAt < now) {
      throw new Error('Data inicial inválida: deve ser posterior à data atual');
    }

    // Validação da data final:
    if (props.endsAt <= props.startsAt) {
      throw new Error('Data final inválida: deve ser posterior à data inicial');
    }

    this.props = props;
  }

}
