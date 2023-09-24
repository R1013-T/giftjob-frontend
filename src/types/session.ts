export type SessionUser = {
  id: string
  name: string
  email: string
  image: string
}

export type User = {
  email: string
  image: string
  name: string
}

export type SessionData = {
  customJwtToken: string
  expires: string
  sessionUser: SessionUser
  user: User
}

export type Session = {
  data: SessionData
  status: string
  update: string
}
