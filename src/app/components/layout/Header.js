import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import CourtesyNavigation from './CourtesyNavigation';
import * as Routes from '../../routes';

import './Header.scss';
import coffee from '../../assets/images/coffee.png';

const Header = () => {

  return (
    <header className="app-header container-fluid">
      <nav className="navbar row ">
        <div className="col-lg-2 align-items">
          <NavLink to={Routes.HOME} className="nav-link" activeClassName="active">
            <img className="logo" src={coffee} alt="koffie logo"/>
          </NavLink>
        </div>
        <div className="col-lg-6 flex justify-center align-items">
          <ul className="navbar-items">
            <li className="nav-item">
              <NavLink to={Routes.HOME} className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={Routes.KOFFIE} className="nav-link" activeClassName="active">Koffie</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={Routes.MERKEN} className="nav-link" activeClassName="active">Merken</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={Routes.MIJNFAVORIETEN} className="nav-link" activeClassName="active">Mijn favorieten</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 flex justify-end align-items">
          <div className="shoppingCart">
            <Link to={Routes.CART} className="btn shopping"><i className="fas fa-shopping-cart fa-2x"></i></Link>
          </div>
          <CourtesyNavigation />
        </div>
      </nav>
    </header>
  );
};

export default Header;

/**
 * <span>Photo by <a href="https://unsplash.com/@supersonnytje?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sonny Ravesteijn</a> on <a href="https://unsplash.com/s/photos/koffie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
 * <span>Photo by <a href="https://unsplash.com/@dylancalluy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Dylan Calluy</a> on <a href="https://unsplash.com/s/photos/koffie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
 * <span>Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/coffee?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
 * <span>Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/coffee?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
 * <span>Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/coffee?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
 **/