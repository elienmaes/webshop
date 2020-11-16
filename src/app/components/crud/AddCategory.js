import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';



const ADDCATEGORYTOITEM = gql`
  mutation addCategoryToItem ($itemId: ID, $name: String){ 
    addCategoryToItem(itemId: $itemId, category:{ name:$name})
      {
      id
      brand
      flavor
      country
      name
      intensity
      price
      description
      imageurl
      quantity
      created_on
      category {
        name
      }
    }
  }
`;

 function AddCategory({refetch, id}) {
  
  const [itemId, setItemId] = useState ('');
  const [categoryName, setCategoryName] = useState('');
  const [addCategoryToItem, { data, error }] = useMutation(ADDCATEGORYTOITEM); 


 useEffect(() => {
    if(data) { console.log(data)}; 
    
  if (error) return <p>Error :(</p>;
  }, [data, error]);

  return (
    <div className="container-fluid adminPage">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-6">
          <h1 id={id}>Voeg een categorie toe</h1>
          <form className="form-additem"
            onSubmit={async e => {
              e.preventDefault();
              try{
                await addCategoryToItem({ variables: { itemId:itemId, name:categoryName } });
                refetch();
              } catch (error){
                alert(error.message);
              }
            }}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">ID</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="id" onChange={e => setItemId(e.target.value)} />
            </div>
            <div className="form-group">
            <label htmlFor="formGroupExampleInput2">category</label>
              <select className="form-control" id="exampleFormControlSelect1" name="kies je smaak">
                <option value="">--kies een category--</option>
                <option onClick={e => setCategoryName(e.target.value)} value="capsules">capsules</option>
                <option onClick={e => setCategoryName(e.target.value)} value="koffiebonen">koffiebonen</option>
                <option onClick={e => setCategoryName(e.target.value)} value="koffiepads">koffiepads</option>
                <option onClick={e => setCategoryName(e.target.value)} value="gemalen koffie">gemalen koffie</option>
              </select>
            </div>
             <button className="btn-add" type="submit" >Voeg category toe</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default AddCategory;