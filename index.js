import { registerRootComponent } from 'expo';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from "./src/store";
import React from "react";
import {rootSaga} from "./src/saga";
import App from './App';
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)
const app = () =>
    <Provider store={store}>
        <App/>
    </Provider>

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(app);
