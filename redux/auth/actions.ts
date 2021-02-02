import { RestoreSessionAction, RestoreSessionSuccessAction, actions, SignInAction, SignInSuccessAction, FailedAction, LogoutAction, LogoutDoneAction } from './constants'
import { Session } from 'redux/auth/UserSession'
import {
    SignInVariables,
    User
  } from 'apiTypes'

export const restoreSession = (): RestoreSessionAction => ({
    type: actions.RESTORE_SESSION,
  })
  
  export const restoreSessionSuccess = (
    session: Session
  ): RestoreSessionSuccessAction => ({
    type: actions.RESTORE_SESSION_SUCCESS,
    session,
  })


export const signin = (data: SignInVariables): SignInAction => ({
    type: actions.SIGNIN,
    data,
  })
  
  export const signinsuccess = (user: User): SignInSuccessAction => ({
    type: actions.SIGNIN_SUCCESS,
    user,
  })
  
  export const signinfailed = (error: string): FailedAction => ({
    type: actions.SIGNIN_FAILED,
    error,
  })

  
export const logout = (): LogoutAction => ({
    type: actions.LOGOUT,
  })
  
  export const logoutDone = (): LogoutDoneAction => ({
    type: actions.LOGOUT_DONE,
  })
  