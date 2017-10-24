import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import reducers from './reducers';
import Welcome from './components/welcome';
import Feature from './components/feature';
import Messages from './components/messages';
import Find from './components/find';
import Donate from './components/donate';
import Notify from './components/notify';


import RequireAuth from './components/auth/require_auth';
import { AUTH_USER} from './actions/types';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
//if we have a token , consider the user to be signed in
if (token){
  //we need to update application state
  store.dispatch({type : AUTH_USER})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history = {browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component = {Welcome}/>
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
        <Route path="signout" component={Signout} />
        <Route path="feature" component={RequireAuth(Feature)}/>
        <Route path="find" component={RequireAuth(Find)}/>
        <Route path="messages" component={RequireAuth(Messages)}/>
        <Route path="donate" component={Donate}/>
        <Route path="notify" component={Notify}/>
      </Route>
    <App />
    </Router>
  </Provider>
  , document.querySelector('.container'));
