import React, { useState, useEffect, Fragment } from 'react';
import classnames from 'classnames';

import {useShoppingCartContext} from '../../Hooks';

import './CoffeeDetail.scss';
import beans from '../../assets/images/beans.png';

 function Detail({item}) {
   const { handlePurchase } = useShoppingCartContext();
    const [likes, setLikes] = useState(JSON.parse(localStorage.getItem('webshop.likes')) || []);
    const [like, setLike] = useState(false);
  

    useEffect(() => {
      localStorage.setItem('webshop.likes', JSON.stringify(likes));
    }, [likes]);

  const handleLike = (ev) => {
    const l = !like;
    if (l) {
      addLike(item.id);
    } else {
      removeLike(item.id);
    }
    setLike(l);
  }
  const addLike = (ItemId) => {
 //To do: aanpassen dat artikel niet 2x kan verschijnen.
    setLikes([
      ...likes,
      {
        id: ItemId,
        item: item,
        createdAt: new Date().getTime(),
      }
    ]);
 
  };

  const removeLike = (ItemId) => {
    setLikes(likes.filter(item => item.id !== ItemId));
  };

  return (
    <div className="row">
        {!!item
          ?
          (
            <div className="col-12 col-md-12 col-lg-10 col-xl-10 detailpage">
              <div className="detail flex" data-id={item.id}>
                <picture className="detail-picture">
                  {!!item.imageurl ? <img className="detail-picture_img" src={item.imageurl} alt={item.title} /> : <Fragment></Fragment>}
                </picture>
                <div className="detail-body">
                    <h1 className="title">{item.name}</h1>
                    <h2 className="price">€ {item.price}</h2>
                    <p className="brand">Merk: <span>{item.brand}</span></p>
                    <div className="like">
                      <i onClick={handleLike} className={classnames('like', (like) ? "align-self-center fas fa-heart fa-2x own_purple" : "align-self-center far fa-heart fa-2x own_purple")}></i>       {/* classnames library: ternary expression to set the heart full when clicked */}
                      <p>Voeg toe aan mijn favorieten</p>
                    </div>
                    <p className="flavor">Smaak: {item.flavor}</p>
                    <p className="intensity">Intensiteit: {item.intensity}<img src={beans} alt="koffiebonen" /></p>                  
                    <p className="description">{item.description}</p>                  
                    <button onClick={() => handlePurchase(item.id, item)} className="btn-order">Bestel</button>
                </div>
              </div>
            </div>
          )
          : <p>De koffie is op.</p>
        }
        </div>
  )
}
export default Detail;