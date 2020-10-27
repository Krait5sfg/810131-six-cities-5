import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import {getOffersFromApi} from './store/api-actions';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './store/reducers/root-reducer';

const api = createApi();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));
store.dispatch(getOffersFromApi());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector(`#root`));
