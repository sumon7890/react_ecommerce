import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';




const Shop = () => {
    const first10Data = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10Data)
    
    return (
        <div className="ShopContainer" >
            <div className="ShopContent">
          
                {
                   products.map(pd => <Product product = {pd} ></Product>)
                } 
  
            </div>
            <div className="cartContainer">
                <h1>Order Summary</h1>
            </div>
  
         
        </div>
    );
};

export default Shop;