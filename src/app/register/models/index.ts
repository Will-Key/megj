import { ParticipationChannel, PaymentStatus } from '../../models'

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

export interface RegisterResponse {
  status: 'error' | 'success'
  message: string
}
