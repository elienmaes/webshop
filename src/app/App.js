import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import * as Routes from './routes';
import {ShoppingCartProvider} from './Hooks/index'
import { RouteWithLayout } from './utilities';

import { BaseLayout } from './layouts';
import { HomePage, RegisterPage, LoginPage, CoffeePage, CoffeeDetailPage,ShoppingCartPage, FavoritesPage, NotFoundPage, AdminPage,LogoutPage,AdminEditPage } from './pages';
import './App.scss';


function App() {
  

  return (
     <>
      <div className="App">
      <ShoppingCartProvider>
        <Router basename={'/2021-werkstuk-react-app-pgmgent-eliemaes1'}>
          <ScrollToTop />
          <Switch>
            <RouteWithLayout exact path={Routes.LANDING} layout={BaseLayout} component={HomePage} />
            <Redirect from={Routes.HOME} to={Routes.LANDING} />
            <RouteWithLayout exact path={Routes.KOFFIE} layout={BaseLayout} component={CoffeePage} />
            <RouteWithLayout exact path={Routes.MERKEN} layout={BaseLayout} component={HomePage} />
            <RouteWithLayout exact path={Routes.KOFFIE_DETAIL} layout={BaseLayout} component={CoffeeDetailPage} />
            <RouteWithLayout exact path={Routes.MIJNFAVORIETEN} layout={BaseLayout} component={FavoritesPage} />
            <RouteWithLayout exact path={Routes.CART} layout={BaseLayout} component={ShoppingCartPage} />
            <RouteWithLayout exact path={Routes.AUTH_SIGN_IN} layout={BaseLayout} component={LoginPage} />
            <RouteWithLayout exact path={Routes.AUTH_SIGN_OUT} layout={BaseLayout} component={LogoutPage} />
            <RouteWithLayout exact path={Routes.AUTH_REGISTER} layout={BaseLayout} component={RegisterPage} />
            <RouteWithLayout exact path={Routes.ADMIN} layout={BaseLayout} component={AdminPage} />
            <RouteWithLayout exact path={Routes.ADMIN_EDIT} layout={BaseLayout} component={AdminEditPage} />
            <RouteWithLayout exact path={Routes.NOT_FOUND_PAGE} layout={BaseLayout} component={NotFoundPage} />
          </Switch>
        </Router>
      </ShoppingCartProvider>
        </div>
      </>
  );
}

export default App;
