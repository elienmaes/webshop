import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import Detail from './componentsPages/CoffeeDetail';

import './CoffeeDetailPage.scss';


const COFFEE_DETAIL = gql`
  query item($id:ID!){
    item(id:$id){
    id,
    brand,
    flavor,
    name,
    intensity,
    price,
    imageurl,
    quantity,
    description,
    category{
      name
    }
    }
  }
`;

function CoffeeDetail() {


  const {id} = useParams();
 
  const {loading, error, data } = useQuery(COFFEE_DETAIL, {
    variables: { id },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
      <div className="container">
        <Detail item={data.item}/>
      </div>
  )
}

export default CoffeeDetail;