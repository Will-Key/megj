export enum ParticipationChannel {
  SANDPIT = 'SABLIERE',
  ONLINE = 'EN LIGNE'
}

export enum PaymentStatus {
  PAID = 'PAYÉ',
  NOTPAID = 'NON PAYÉ'
}

export interface RegisterFormInput {
  name: string
  firstName: string
  fbName: string
  phoneNumber: string
  whaPhoneNumber: string
  city: string
  intention: string
  participation: ParticipationChannel
}

export interface Participant extends RegisterFormInput {
  id: string
  status: PaymentStatus
}

export interface RegisterResponse {
  status: 'error' | 'success'
  message: string
}
