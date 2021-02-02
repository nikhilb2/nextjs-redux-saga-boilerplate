import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import logger from "redux-logger";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { reducer, State } from "./reducer";
import createSagaMiddleware, {Task} from 'redux-saga';
import authReducer from '../redux/auth/reducer'
import authSaga from '../redux/auth/saga'


const appReducer = combineReducers({
  
  authReducer,
})


export interface SagaStore extends Store {
  sagaTask: Task;
}
export type RootState = ReturnType<typeof appReducer>

const makeStore: MakeStore<RootState> = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(appReducer, applyMiddleware(sagaMiddleware, logger));

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(authSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper(makeStore);