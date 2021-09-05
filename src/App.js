import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user.actions';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch(); // dispatch() never updates
  // const func = () => { // new instance of a function
  //   console.log('hey!');
  // };

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]); // run only once when the App is mounted
  // }, [dispatch, func]); // rerun every time the App is re-rendered

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
