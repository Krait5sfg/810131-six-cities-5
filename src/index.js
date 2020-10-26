import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import {getOffersFromApi} from './store/api-actions';
import {composeWithDevTools} from 'redux-devtools-extension';

const api = createApi();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));
store.dispatch(getOffersFromApi());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector(`#root`));
