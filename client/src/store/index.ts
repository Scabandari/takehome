import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';

// @ts-ignore The module implicitly have any as it type since it doesn't have a d.ts file
import reducers from './reducers/index';
import sagas from './sagas/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    store?: any; // Add this to expose store to window
  }
}

const initialState = {};
const sagaMiddleware = createSagaMiddleWare();

// Add `loggerMiddleware` to your middlewares array
// const middlewares = [loggerMiddleware, sagaMiddleware];

const middlewares = [sagaMiddleware];

// @ts-ignore
const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.({
    // @ts-ignore
    trace: true,
    traceLimit: 25,
  }) || compose;

export type RootState = ReturnType<typeof reducers>;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(...enhancers) as any
);

// Expose store to window for debugging
if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

sagaMiddleware.run(sagas);

export default store;
