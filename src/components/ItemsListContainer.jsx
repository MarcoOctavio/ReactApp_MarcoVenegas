import React, { useEffect, useState } from 'react';
import faktary from '../assets/faktary.png';
import { gerProducts } from '../mock/AsyncService';
import ItemList from './ItemList';
 
const ItemListContainer = ({ greeting, texto }) => {

  const [data, setData] = useState([])

  useEffect(() => {
    gerProducts()
    .then((res)=> setData(res))
    .catch((error) => console.error(error));
  }, []);
console.log(data, 'data')
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="welcome-card text-center">
            <h1 className="display-4 mb-3">{greeting}</h1>
            <p className="lead">{texto}</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="contenedor-imagen">
        <img src={faktary} alt="Pancito humeante" className="imgen1"/>
        </div>
      </div>
      <ItemList data={data}/>
    </div>
    
  );
};
 
export default ItemListContainer;
 
 
 