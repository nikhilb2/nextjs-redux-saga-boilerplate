import { Session } from './UserSession'
import {
    SignInVariables,
    User
  } from 'apiTypes'

  export const actions = {
    RESTORE_SESSION: 'RESTORE_SESSION',
    RESTORE_SESSION_SUCCESS: 'RESTORE_SESSION_SUCCESS',

    SIGNIN: 'SIGNIN',
    SIGNIN_FAILED: 'SIGNIN_FAILED',
    SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  
    LOGOUT: 'LOGOUT',
    LOGOUT_DONE: 'LOGOUT_DONE',
  }


// common types
export interface AuthState {
    authorized: boolean
    signinin: boolean
    signinError: string | null
    user: User | null
    sessionRestored: boolean
  
  }


// actions
export interface RestoreSessionAction {
    type: typeof actions.RESTORE_SESSION
  }
  
export interface RestoreSessionSuccessAction {
    type: typeof actions.RESTORE_SESSION_SUCCESS
    session?: Session
}

  
  
export interface SignInAction {
    type: typeof actions.SIGNIN
    data: SignInVariables
  }
  
  export interface SignInSuccessAction {
    type: typeof actions.SIGNIN_SUCCESS
    user: User
  }
  

export interface LogoutAction {
    type: typeof actions.LOGOUT
  }
  
  export interface LogoutDoneAction {
    type: typeof actions.LOGOUT_DONE
  }
  
  export interface FailedAction {
    type: string
    error: string
  }

  export type AuthActionTypes = RestoreSessionAction
 | RestoreSessionSuccessAction
 | SignInAction
 | SignInSuccessAction
 | LogoutAction
 | LogoutDoneAction
 | FailedAction