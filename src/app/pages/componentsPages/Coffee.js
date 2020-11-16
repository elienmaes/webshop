import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import * as Routes from '../../routes';
import {useShoppingCartContext} from '../../Hooks';

import './Coffee.scss';
import beans from '../../assets/images/beans.png';

const COFFEE = gql`
  query items{
     items {
      id,
      brand,
      flavor,
      name,
      intensity,
      price,
      imageurl,
      quantity,
      category{
        name
      }
    }
  }
`;

function Coffee() {
  
  const {loading, error, data, refetch } = useQuery(COFFEE);
  const { handlePurchase } = useShoppingCartContext();
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if(data) refetch();
  
  const handleCategory = (e) => {
    const categoryLabel = e.target.value;
    
    const card = document.querySelectorAll('.card-container');  //returns array of al elements

   card.forEach((card)=>{
     const cardAttr = card.getAttribute('data-tag');

     if(categoryLabel === cardAttr){
       card.style.display="block";
    } else if (categoryLabel === 'all') {
          card.style.display = "block";
        } 
     else{
        card.style.display="none";   
     }
   })
  }

  return (
    <>
    <div className="row category">
      <div className="col-lg-12 col-md-12 col-12">
        <h1>Selecteer hier jouw voorkeur:</h1>
        <div className="category-btn-group">
          <button onClick={handleCategory} value="all">Alles</button>
          <button onClick={handleCategory} value="koffiebonen">Koffiebonen</button>
          <button onClick={handleCategory} value="gemalen koffie">Gemalen koffie</button>
          <button onClick={handleCategory} value="koffiepads">Koffiepads</button>
          <button onClick={handleCategory} value="capsules">Capsules</button>
        </div>
       
      </div>
    </div>
    <div className="row coffee">
      {!!data.items
      ? data.items.map(item=>(
          <Fragment key={item.id}>
            <div className="col-lg-4 card-container" data-tag={item.category.map(category=>category.name)}>
              <div className="card">
                <div className="card-category">{item.category.map(category=>category.name)}</div>
                <picture className="card-picture">
                  {!!item.imageurl ? <img className="card-picture_img" src={item.imageurl} alt={item.name} /> : <Fragment></Fragment>}
                </picture>
                <div className="card-body">
                  <h2 className="card-body_name">{item.name}</h2>
                  <div className="card-body_line"></div>
                  <p className="card-body_brand">Merk: <span>{item.brand}</span></p>
                  <p className="card-body_intensity">Intensiteit: {item.intensity}<img src={beans} alt="koffiebonen" /></p>
                  <div className="card-body_flavor">Smaak: <span>{item.flavor}</span></div>
                  <span className="card-body_quantity">{item.quantity} kg</span>
                  <h2 className="card-body_price">{item.price} €</h2>
                  
                  <div className="button-group">
                    <div className="card-body_stock"><i className="far fa-check-circle"></i>Op voorraad</div>
                    <button onClick={() => handlePurchase(item.id, item)} className="btn-order">Bestel</button>
                    <Link to={Routes.KOFFIE_DETAIL.replace(':id', item.id)} className="btn-detail">Detail</Link>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))
        : <p>De koffie is op</p>
        }
      
    </div>
</>
  )
}

export default Coffee;