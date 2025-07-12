import React from 'react';
import faktary from '../assets/faktary.png';
 
const ItemListContainer = ({ greeting, texto }) => {
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
    </div>
  );
};
 
export default ItemListContainer;
 
 
 