import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    return (
        <div>
            <div className="productName"><h1>{props.product.name}</h1></div>
            <div className="MainCountian">
                <div className="img"><img src={props.product.img} alt="" srcset="" /> </div>
                <div className="ProductInformation">
                    <p>By : {props.product.seller}</p>
                    <h4>Price : ${props.product.price}</h4>
                    <p>only {props.product.stock} left in stock - order soon</p>
                    <button>Add to Cart</button>
                </div>
                <div className="ProductDescription">
                  {/* <p>{props.Product.star}</p>   */}
                  <h3>Features</h3>
                  {
                      console.log(props.product.features)
                  }
                  <p>Description:{props.product.features.description} Value:{props.product.features.value}</p>
                </div>
            </div>
          
        </div>
    );
};

export default Product;