import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
// (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument())));

export default store;
