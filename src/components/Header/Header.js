import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/logo.png';
import './Hedar.css';

const Header = () => {
    return (
        <div >
            <div  className="header">
                <img src={logo} alt=""/>
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Review Order</a>
                    <a href="/ManageInventory">Manges</a>
                </nav>
            </div>
            <div className="surchBox">
                <input type="text" placeholder="Type here to Search" /> <FontAwesomeIcon className="shop" icon={faShoppingCart} />
            </div>
            
        </div>
    );
};

export default Header;
