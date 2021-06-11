import React from 'react';
import logo from '../../images/logo.png';
import './Hedar.css';

const Header = () => {
    return (
        <div className="header" >
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review Order</a>
                <a href="/ManageInventory">Manges</a>
            </nav>
        </div>
    );
};

export default Header;
