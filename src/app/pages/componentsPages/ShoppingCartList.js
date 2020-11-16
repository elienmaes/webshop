import React,{useState}  from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../../routes';
import {useShoppingCartContext} from '../../Hooks';

import './ShoppingCartList.scss';

 function ShoppingCartList() {

    const {handleRemove} = useShoppingCartContext();
    const[cart, setCart] = useState(JSON.parse(localStorage.getItem('webshop.purchase')) || []);
    const [value, setValue] = useState(1);

    const handleAddition = (e)=>{
      e.preventDefault();
      let inputValue = document.querySelector('.quantity-input');
      let value = parseInt((inputValue).value);
      value+=1;
      setValue(value);
    };

    const handleSubtract = (e) =>{
      e.preventDefault();
      let inputValue = document.querySelector('.quantity-input');
      let value = parseInt((inputValue).value);
      if(value===0){
        inputValue.value=0;
      }else{
        value-=1;
      }
      setValue(value);
    };

    const handleCheckout = (e) =>{
      e.preventDefault();
      alert('Gelieve even te wachten terwijl uw bestelling wordt afgewerkt.');
      setCart([]);
    }

    
  return (
    <div className="container shoppingcart" >
      <div className="row shoppingcart-line">
        <div className="col-3 col-md-6 col-lg-4">
          <div className="label">Product</div>
        </div>
        <div className="col-3 col-md-2 col-lg-2">
          <div className="label">Prijs</div>
        </div>
        <div className="col-3 col-md-2 col-lg-2">
          <div className="label">Aantal</div>
        </div>
        <div className="col-3 col-md-2 col-lg-2">
          <div className="label">Totaal</div>
        </div>
        <div className="col-12 col-md-2 col-lg-2">
          <div></div>
        </div>
      </div>
      { 
        !!typeof cart!=='undefined' && cart.length>0
        ? cart.map(product => {
          return(
                <div className="row product-wrapper" key={product.id}>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="product ">
                    <h4 className="product-heading mx-3"> <Link to={Routes.KOFFIE_DETAIL.replace(':id', product.id)} className="">{product.item.name}</Link></h4>
                      <img className="product-image" src={product.item.imageurl} alt={product.item.name} />
                    </div>
                  </div>
                  <div className="col-3 col-md-2 col-lg-2">
                    <div>€ {product.item.price}</div>
                  </div>
                  <div className="col-3 col-md-2 col-lg-2">
                    <button className="plus-btn" onClick={handleAddition}>
                      <i className="fas fa-plus"></i>
                    </button>
                    <input className="quantity-input"type="text" name="name" value={value} onChange={e => setValue(e.target.value)}/>
                    <button className="min-btn" onClick={handleSubtract}>
                      <i className="fas fa-minus"></i>
                    </button>
                  </div>
                   <div className="col-3 col-md-2 col-lg-2">
                    <div>€ {!!cart ? parseFloat(value * product.item.price).toFixed(2) : <p>0</p>}</div>
                  </div>
                  <div className="col-3 col-md-2 col-lg-2">
                    <button onClick={() => handleRemove(product.id, setCart)} className="btn btn-danger remove">
                      <span className="glyphicon glyphicon-remove"></span>
                       Remove
                    </button>
                  </div>
                </div>
          )
        })
        :
        <p>Er zijn momenteel geen items in jouw winkelmandje.</p>
      }
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12 actions">
          <Link to={Routes.KOFFIE} className="shopping">Verder winkelen</Link>
          <button className="end" onClick={handleCheckout}>Afrekenen</button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartList;