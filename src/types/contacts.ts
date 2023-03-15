export interface IContacts {
  id: number
  name: string
  phone: string
  email?: string
  tags?: string[]
}

export type IFilter = 'name' | 'phone' | 'email'
