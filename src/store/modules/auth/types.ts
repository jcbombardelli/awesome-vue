export interface UserProfile {
  name: string
}

export interface State {
  token: string,
  user: UserProfile
}

export enum ActionTypes {
  LOGIN = 'login',
  LOGOUT = 'logout',
  LOAD_TOKEN = 'loadToken'
}

export enum MutationTypes {
  SET_AUTHENTICATION = 'setAuthentication',
  SET_AUTH_TOKEN = 'setAuthToken',
  SET_USER = 'setUser'
}

export interface LoginRequest {
  username: 'string',
  password: 'string'
}

export interface LoginResponse {
  auth : boolean,
  token: string,
  expires: number,
  user: UserProfile
}
