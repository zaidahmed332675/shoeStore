import React from 'react';
import {useParams} from 'react-router-dom';

let ProductDetail = () => {
    let {shoe} = useParams();

    return ( 
      <div>
        <h1>Product {shoe} Details Page Page</h1>
        
      </div>)
  }
  
export default ProductDetail;