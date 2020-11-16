import React, { } from 'react';

import { Link } from 'react-router-dom';
import * as Routes from '../../routes';



import './CourtesyNavigation.scss';

const CourtesyNavigation = ({ children }) => {
  const isUserLoggedIn= JSON.parse(localStorage.getItem('userInfo'));
  
return(
  <div>
    {
      isUserLoggedIn===null
      ? <ul className="navbar-nav courtesy-navigation">
          <li className="nav-item flex">
            <Link className="nav-link" to={Routes.AUTH_SIGN_IN}>Log in</Link>
            <Link className="nav-link" to={Routes.AUTH_REGISTER}>Registreer</Link>
          </li>
        </ul>
      : isUserLoggedIn[0].isAdmin===true
        ? <ul className="navbar-nav courtesy-navigation">
           <li className="nav-item flex">
             <Link className="nav-link admin" to={Routes.ADMIN}>Admin</Link>
             <Link className="nav-link" to={Routes.AUTH_SIGN_OUT}>Log out</Link>
             <Link className="nav-link" to={Routes.AUTH_REGISTER}>Registreer</Link>
           </li>
         </ul>
        : <ul className="navbar-nav courtesy-navigation">
            <li className="nav-item flex">
              <Link className="nav-link" to={Routes.AUTH_SIGN_OUT}>Log out</Link>
              <Link className="nav-link" to={Routes.AUTH_REGISTER}>Registreer</Link>
            </li>
          </ul>
    }
  </div>
)
};

export default CourtesyNavigation;
