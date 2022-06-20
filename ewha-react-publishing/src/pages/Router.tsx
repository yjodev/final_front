import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { MessagePage } from './MessagePage';
import { SignupPage } from './SignupPage';
import { FollowPage } from './FollowPage';

export const Router = () => {
  return (
    <Switch>
      <Route path="/message" component={MessagePage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      {/* <Route path="/" component={HomePage} exact /> */}
      <Route path="/follow" component={FollowPage} />
      <Route path="/rooms/:id" component={MessagePage} exact />

      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
