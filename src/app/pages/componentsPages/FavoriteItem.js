
import React, { useState,Fragment } from 'react';
import * as Routes from '../../routes';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import {useShoppingCartContext} from '../../Hooks';
import './Coffee.scss';

import beans from '../../assets/images/beans.png';
import './FavoriteItem.scss';


const FavoriteItem = () => {
  const { handlePurchase } = useShoppingCartContext();
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('webshop.likes')));

  const handleFavorite = (id) => {
    const arr = JSON.parse(localStorage.getItem('webshop.likes'));
    let newLiked = arr.filter(item => item.id !== id); //remove unliked item from array of items
    localStorage.setItem('webshop.likes', JSON.stringify(newLiked));
    setFavorites(newLiked); //adding only items that are liked to the local storage
  };

  const checkLiked = (id) => {
    const liked = JSON.parse(localStorage.getItem('webshop.likes'));
    const newLiked = liked.filter(i => id === i.id); //Check if item is liked
    if (newLiked.length > 0) {
      return true;
    } else {
      return false;
    };
  };


  return (
    <div className="row coffee">
      {
        !!typeof favorites!=='undefined' && favorites.length>0
          ? favorites.map((favo, index) => {
            return (
              <div className="col-lg-4" key={index}>
              <div className="card">
                <picture className="card-picture">
                  {!!favo.item.imageurl ? <img className="card-picture_img" src={favo.item.imageurl} alt={favo.item.name} /> : <Fragment></Fragment>}
                </picture>
                <div className="card-body">
                  <h2 className="card-body_name">{favo.item.name}</h2>
                  <div className="card-body_line"></div>
                  <p className="card-body_intensity">Intensiteit: {favo.item.intensity}<img src={beans} alt="koffiebonen" /></p>
                  <div className="card-body_flavor">Smaak: <span>{favo.item.flavor}</span></div>
                  <span className="card-body_quantity">{favo.item.quantity} kg</span>
                  <div className="card-body-tag">
                    <h2 className="card-body_price">{favo.item.price} €</h2>
                    <i onClick={() => handleFavorite(favo.item.id)} className={classnames('favorite', (checkLiked(favo.item.id)) ? "fas fa-heart fa-2x" : "far fa-heart fa-2x")}></i>
                  </div>
                  <div className="button-group">
                  <div className="card-body_stock"><i className="far fa-check-circle"></i>Op voorraad</div>
                    <button onClick={() => handlePurchase(favo.item.id, favo.item)} className="btn-order">Bestel</button>
                    <Link to={Routes.KOFFIE_DETAIL.replace(':id', favo.item.id)} className="btn-detail">Detail</Link>
                  </div>
                  
                </div>
              </div>
            </div>
            )
          })
          : 
          <div className="empty">
            <p>Je hebt jammer genoeg nog geen favorieten toegevoegd.</p>
            <Link to={Routes.KOFFIE} className="btn-order">Selecteer hier je koffie</Link>
          </div>
      }
    </div>
  )
};

export default FavoriteItem;