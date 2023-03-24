
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagaRoot";

// initial states here
const initalState = {};

// middleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);



