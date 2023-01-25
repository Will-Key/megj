import { PaymentStatus } from '../../models'

export interface FilterOptions {
  status: PaymentStatus
  query: string
}
