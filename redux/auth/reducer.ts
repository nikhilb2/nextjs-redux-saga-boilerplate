import { actions, AuthActionTypes, AuthState, FailedAction, RestoreSessionSuccessAction, SignInSuccessAction } from "./constants";

const initialState: AuthState = {
    user: null,
    signinin: false,
    signinError: null,
    sessionRestored: false,
    authorized: false
 }


const authReducer = (
    state = initialState,
    action: AuthActionTypes
  ): AuthState => {
    switch (action.type) {
        case actions.LOGOUT_DONE:
      return Object.assign({}, state, {
        authorized: false,
        user: null
      })
        case actions.SIGNIN:
            return Object.assign({}, state, {
              sigininin: true,
              signinError: null,
            })
          case actions.SIGNIN_SUCCESS:
            return Object.assign({}, state, {
              sigininin: false,
              user: (action as SignInSuccessAction).user,
            })
          case actions.SIGNIN_FAILED:
            return Object.assign({}, state, {
              sigininin: false,
              signinError: (action as FailedAction).error,
            })
            case actions.RESTORE_SESSION_SUCCESS:
                return Object.assign({}, state, {
                  user: (action as RestoreSessionSuccessAction).session?.user,
                  sessionRestored: true,
                })
          
            default: 
            return state
    }
  }
  export default authReducer
