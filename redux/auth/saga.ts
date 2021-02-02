import {
    actions,
    
    
    LogoutAction,
    
    RestoreSessionAction,
    
    SignInAction,
    
  } from './constants'
  
  import {
    signinsuccess,
    signinfailed,
    restoreSessionSuccess,
    logoutDone
  } from './actions'
  
  import {
    SignInVariables,
    SignInResult,
    
  } from '../../apiTypes'
  
  import { call, put, all, takeLatest, select } from 'redux-saga/effects'
  
  import request, {
    RequestReturnParam,
    RequestSuccess,
    RequestFail,
    requestUploadImage,
} from '../request'
  import { login, logout, currentSession, removeCode } from './UserSession'
  
  
  const {
    SIGNIN,
    
    RESTORE_SESSION,
    LOGOUT
  } = actions
  
  function* requestSignin(action: SignInAction) {
    const credentials: SignInVariables = {
      email: action.data.email.toLowerCase(),
      password: action.data.password,
    }
    console.log(credentials)
    const requestURL = '/api/auth/signin'
    const signin: RequestReturnParam<SignInResult> = yield call<typeof request>(
      request,
      requestURL,
      'POST',
      credentials
    )
  
    console.log('signin')
    console.log(signin)
  
    if (signin.success) {
      const data = (signin as RequestSuccess<SignInResult>).data
      yield call<typeof login>(login, {
        user: data.user,
        jwt: data.token,
      })
      //  yield call(registerForPushNotificationsAsync)
      yield put(signinsuccess(data.user))
    } else {
      yield put(signinfailed((signin as RequestFail).message))
    }
  }
  
  
  export function* requestLogout(action: LogoutAction) {
    yield call(logout)
    yield put(logoutDone())
  }
  
  function* requestRestoreSession(action: RestoreSessionAction) {
    const session = yield call(currentSession)
    console.log(session)
  
    yield put(restoreSessionSuccess(session))
  }
  
  function* restoreSessionSaga() {
    yield takeLatest(RESTORE_SESSION, requestRestoreSession)
  }
  
  function* signinSaga() {
    yield takeLatest(SIGNIN, requestSignin)
  }
  
  function* logoutSaga() {
    yield takeLatest(LOGOUT, requestLogout)
  }
  
  
  function* mainSaga() {
    yield all([
      call(signinSaga),
      call(restoreSessionSaga),
      call(logoutSaga)
    ])
  }
  
  export default mainSaga
  