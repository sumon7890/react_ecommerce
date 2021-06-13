import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';




const Shop = () => {
    const first10Data = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10Data)
    const [cart, setCart] = useState([])

    const handleProduct = (product) =>{
        const newCat = [...cart,product]
        setCart(newCat)

    }

    return (
        <div className="ShopContainer" >
            <div className="ShopContent">

                {
                    products.map(pd =>
                         <Product
                        handleProduct = {handleProduct}
                         product={pd} >
                         </Product>)
                }

            </div>
            <div className="cartContainer">
                <div>
                    <Cart cart={cart}></Cart>
                </div>
                <button>Review your Order</button>

            </div>


        </div>
    );
};

export default Shop;