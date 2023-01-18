export interface Login {
  email: string
  password: string
}

export interface User {
  uid: string
  email: string | null
}
