import React, { Fragment } from 'react';
import { gql, useQuery,useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import * as Routes from '../routes';

import {AddItem, AddCategory} from '../components/crud';
import './AdminPage.scss';

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

const REMOVEITEM = gql`
  mutation removeItem($item: ID) {
      removeItem(item: $item) {
          id
        }
      }
`;

 function AdminPage() {
const {loading, error, data, refetch } = useQuery(COFFEE);
  const [removeItem] = useMutation(REMOVEITEM); 

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
     <div className="container-fluid" id={"top"}>
       <div className="row">
         <div className="col-lg-2 side" >
           <ul className="side-nav">
             <li className="side-nav_item">
                <HashLink activeclass="active" className="link" to="/admin#add"> {/* Use HashLink library to scroll to the element on the page with the id that matches the #hash-fragment in the link */}
                Voeg een product toe
            </HashLink>
             </li>
             <li className="side-nav_item">
                <HashLink activeclass="active" className="link" to="/admin#addcat"> {/* Use HashLink library to scroll to the element on the page with the id that matches the #hash-fragment in the link */}
                Voeg een category toe
            </HashLink>
             </li>
             <li className="side-nav_item">
                <HashLink activeclass="active" className="link" to="/admin#edit"> {/* Use HashLink library to scroll to the element on the page with the id that matches the #hash-fragment in the link */}
                Overzicht producten
            </HashLink>
             </li>
           </ul>
           <div className="to-top">
             <HashLink activeclass="active" className="link" to="/admin#top"> {/* Use HashLink library to scroll to the element on the page with the id that matches the #hash-fragment in the link */}
                <i className="fas fa-long-arrow-alt-up"></i>
                <div>Omhoog</div>
            </HashLink>
           </div>
         </div>
         <div className="col-lg-10">
            <AddItem refetch={refetch} id={"add"}/>
            <AddCategory refetch={refetch} id={"addcat"}/>
   <div className="container-fluid"  >
   <h1 id="edit">Overzicht producten</h1>
      {!!data.items
      ? data.items.map(item=>(
          <Fragment key={item.id}>
           <div className="row admin" >
            <div className="col-lg-6 card-container">
              <div className="card">
                <picture className="card-picture">
                  {!!item.imageurl ? <img className="card-picture_img" src={item.imageurl} alt={item.name} /> : <Fragment></Fragment>}
                </picture>
                <div className="card-body">
                  <p>id: {item.id}</p>
                  <p className="card-body_name">{item.name}</p>
                  <div className="card-body_line"></div>
                  <p className="card-body_brand">Merk: <span>{item.brand}</span></p>
                  <p className="card-body_intensity">Intensiteit: {item.intensity}</p>
                  <div className="card-body_flavor">Smaak: <span>{item.flavor}</span></div>
                  <p className="card-body_quantity">{item.quantity} kg</p>
                  <p className="card-body_price">{item.price} €</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 admin-buttons">
                <Link to={Routes.ADMIN_EDIT.replace(':id', item.id)} className="btn-edit">Edit</Link>
                <button
                 onClick={async e => {
                            e.preventDefault();
                            try{
                              await removeItem({ variables: { item: item.id }} );
                              refetch();
                            } catch(error) {
                              alert(error.message)
                              }
                            
                            }
                            } type="submit" className="btn-delete">Delete</button>
            </div>
          </div>
          </Fragment>
        ))
        : <p>De koffie is op</p>
        }
        </div>
         </div>
       </div>
     </div>
   
    </>
  )
}
export default AdminPage;