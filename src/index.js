import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import {getOffersFromApi, checkAuth} from './store/api-actions';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './store/reducers/root-reducer';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './utils/const';

const api = createApi(() => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)));

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));
store.dispatch(getOffersFromApi());
store.dispatch(checkAuth());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector(`#root`));
