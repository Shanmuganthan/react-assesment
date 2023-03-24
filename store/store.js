
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

// creating store
export const store = createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);




// import { applyMiddleware, createStore } from 'redux';
// import reducer from './reducer';
// import { createWrapper } from 'next-redux-wrapper';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagaRoot';



// const bindMiddleware = (middleware) => {
//     if (process.env.NODE_ENV !== 'production') {
//         const { composeWithDevTools } = require('redux-devtools-extension');
//         return composeWithDevTools(applyMiddleware(...middleware));
//     }
//     return applyMiddleware(...middleware);
// };

// export const makeStore = (context) => {
//     const sagaMiddleware = createSagaMiddleware();
//     const store = createStore(reducer, applyMiddleware(sagaMiddleware));
//     sagaMiddleware.run(rootSaga);
//     return store;
// };


// export const wrapper = createWrapper(makeStore, { debug: true });
