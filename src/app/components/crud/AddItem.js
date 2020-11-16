import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';


const ADDNEWITEM = gql`
  mutation addNewItem($brand: String, $flavor: Flavor, $country: String, $name: String, $intensity: Int, $price: Float, $description: String, $imageurl: String, $quantity: Float) {
      addNewItem(
    item: {
      brand: $brand,
      flavor: $flavor,
      country: $country,
      name: $name,
      intensity: $intensity,
      price: $price,
      description: $description,
      imageurl: $imageurl,
      quantity: $quantity,
      
    }
  ) {
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
   
  }
  }
`;

 function AddItem({refetch, id}) {
  const [brand, setBrand] = useState('');
  const [flavor, setFlavor] = useState('');
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [intensity, setIntensity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [imageurl, setImageurl] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [addNewItem, { data, error }] = useMutation(ADDNEWITEM); 



 useEffect(() => {
    if(data) { console.log(data)}; 
    
  if (error) return <p>Error :(</p>;
  }, [data, error]);

  return (
    <div className="container-fluid adminPage">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-6">
          <h1 id={id}>Voeg een product toe</h1>
          <form className="form-additem"
            onSubmit={async e => {
              e.preventDefault();
              try{
                await addNewItem({ variables: { brand: brand, flavor: flavor, country: country, name: name, intensity: parseInt(intensity), price: parseFloat(price), description: description,imageurl: imageurl, quantity: parseFloat(quantity) } });
                refetch();
              } catch (error){
                alert(error.message);
              }
            }}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Merk</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Merk" onChange={e => setBrand(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Smaak</label>
              {/* <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Smaak" onChange={e => setFlavor(e.target.value)}/> */}
              <select className="form-control" id="exampleFormControlSelect1" name="kies je smaak">
                <option value="">--kies een smaak--</option>
                <option onClick={e => setFlavor(e.target.value)} value="CHOCOLADE">CHOCOLADE</option>
                <option onClick={e => setFlavor(e.target.value)} value="FRUITIG">FRUITIG</option>
                <option onClick={e => setFlavor(e.target.value)} value="NOTIG">NOTIG</option>
                <option onClick={e => setFlavor(e.target.value)} value="BLOEMIG">BLOEMIG</option>
                <option onClick={e => setFlavor(e.target.value)} value="KRUIDIG">KRUIDIG</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Land van herkomst</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Land van herkomst" onChange={e => setCountry(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Naam product</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Naam product" onChange={e => setName(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Intensiteit</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Intensiteit" onChange={e => setIntensity(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Prijs</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Prijs product" onChange={e => setPrice(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Beschrijving product</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Beschrijving product" onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Afbeeldingurl</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Afbeeldingurl" onChange={e => setImageurl(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Hoeveelheid in kg</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Hoeveelheid in kg" onChange={e => setQuantity(e.target.value)}/>
            </div>
             <button className="btn-add" type="submit" >Voeg toe</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default AddItem;