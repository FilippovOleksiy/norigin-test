import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainReducer from './reducers/mainReducer';
import rootSaga from './sagas/saga';

const rootReducer = combineReducers({
  main: mainReducer,
});
const middleware = [];
const enhancers = [];

const client = axios.create({
  baseURL: 'http://localhost:1337',
  responseType: 'json',
});

const sagaMiddleware = createSagaMiddleware();

middleware.push(axiosMiddleware(client));
middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));

const store = createStore(rootReducer, composeWithDevTools(...enhancers));

sagaMiddleware.run(rootSaga);

export default store;
