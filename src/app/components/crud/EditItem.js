import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import * as Routes from '../../routes';

const EDITITEM = gql`
  mutation updateItem($item: ID, $price: Float) {
      updateItem(item: $item,itemupdate:{ price: $price }) {
          id
          price
        }
      }
`;

 function EditItem() {
  const [price, setPrice] = useState(0);
  const [updateItem, { data, error }] = useMutation(EDITITEM); 

  let {id}= useParams();
 
 useEffect(() => {
    if(data) { console.log(data)}; 
    
  if (error) return <p>Error :(</p>;
  }, [data, error]);


  return (
    <div className="container adminPage">
      <div className="row">
        <div className="col-lg-10 col-md-6 col-sm-6">
          <form className="form-edititem"
            onSubmit={async e => {
              e.preventDefault();
              try{
                await updateItem({ variables: { item: id, price:parseFloat(price) }} );
              } catch(error){
                alert(error.message);
              }
              
               }
              }>
            
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">ID</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="id" defaultValue={id} />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Prijs</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Prijs product" onChange={e => setPrice(e.target.value)} />
            </div>
            
             <Link to={Routes.ADMIN} className="btn-edit">Edit</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
export default EditItem;