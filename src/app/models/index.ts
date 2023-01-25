import { RegisterFormInput } from '../register/models'

export interface ValidatePhoneNumber {
  status: 'error' | 'success'
  phone_valid: boolean
}
export enum ParticipationChannel {
  SANDPIT = 'SABLIERE',
  ONLINE = 'EN LIGNE',
}

export enum PaymentStatus {
  PAID = 'PAID',
  NOTPAID = 'NOTPAID',
}

export interface Participant extends RegisterFormInput {
  createdAt: Date
  updatedAt: Date
  paymentStatus: PaymentStatus
  paymentAmount: number
}
