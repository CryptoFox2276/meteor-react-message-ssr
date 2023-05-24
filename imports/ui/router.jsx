import React, { Component } from 'react';
import {Route } from 'react-router';

import App from './App';
import SignInPage from './pages/signInPage';
import SignUpPage from './pages/signUpPage';
import MessageList from './pages/messageList';
import Auth from './auth';

// const authenticate = (nextState, replace) => {
//     if (!Meteor.loggingIn() && !Meteor.userId()) {
//         replace({
//             pathname: '/',
//             state: {nextPathname: nextState.location.pathname}
//         });
//         return;
//     }
// }

export const Routes = () =>
    <App>
        <Route exact path="/" render={props => <SignInPage {...props} /> } />
        <Route exact path="/signup" render={props => <SignUpPage {...props} /> } />
        {/* <Route exact path="/messagelist" render={props => <MessageList {...props} /> } onEnter={_.partial(this.authenticate)} /> */}
        {/* <Route exact path="/messagelist" render={props => <MessageList {...props} /> } onEnter={_.partial(this.authenticate)} /> */}
        <Auth exact path={'/messagelist'}>
          <button>Logout from App</button>
        </Auth>
    </App>