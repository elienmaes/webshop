import React, { } from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

import './Footer.scss';

const Footer = ({ children }) => {
  return (
    <footer className="app-footer">
      <div className="container-fluid">
        <div className="row flex">
          <div className="col-12 col-md-4 col-lg-4">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to={Routes.HOME} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.KOFFIE} className="nav-link">Koffie</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.MERKEN} className="nav-link">Merken</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.MIJNFAVORIETEN} className="nav-link">Mijn favorieten</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.AUTH_SIGN_IN} className="nav-link">Meld je aan</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <h1 className="nav-title">Service</h1>
              <p className="nav-info">maandag t/m vrijdag</p>
              <p className="nav-info">8u30 - 17u00</p>
              <div className="flex">
                <i className="fas fa-phone-alt"></i>
                <p className="nav-info">Bel: +32 000 000</p>
              </div>
              <div className="flex">
                <i className="fas fa-envelope"></i>
                <p className="nav-info"><a href="mailto:hege@example.com">info@koffie4you.be</a></p>
              </div>
              
          </div>
          <div className="col-12 col-md-4 col-lg-4">
          <h1 className="nav-title">Volg ons</h1>
            <ul className="nav flex-row d-flex justify-content-around">
              <li className="nav-item">
                <a href="/" className="nav-link"><i className="fab fa-facebook-square fa-2x"></i></a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link"><i className="fab fa-github fa-2x"></i></a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link"><i className="fab fa-twitter-square fa-2x"></i></a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link"><i className="fab fa-linkedin fa-2x"></i></a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link"><i className="fab fa-instagram-square fa-2x"></i></a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-12 col-lg-12">
            <div className="copyright">© 2020 Copyright - Elien Maes</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
