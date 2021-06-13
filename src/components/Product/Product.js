import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const description = props.product.features.map(pd => <li>{pd.description}: {pd.value}</li>)

    const { name, img, seller, price, stock } = props.product;
    return (
        <div>
            <div className="productName"><h1>{name}</h1></div>
            <div className="MainCountian">
                <div className="img"><img src={img} alt="" srcset="" /> </div>
                <div className="ProductInformation">
                    <p>By : {seller}</p>
                    <h4>Price : ${price}</h4>
                    <p>only {stock} left in stock - order soon</p>
                   <button
                    className="cartButton"
                    onClick = {()=>props.handleProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                     </button>
                </div>
                <div className="ProductDescription">
                    {/* <p>{props.Product.star}</p>   */}
                    <h3>Features</h3>
                    {/* <table>
                       <tbody>
                           <tr>
                           <td>Description:{description}</td>
                            <td> Value:{Value}</td>
                           </tr>
                       </tbody>
                   </table> */}
                    <ul>
                        <li>Description:{description} </li>
                        {/* <li>Value:{Value}</li> */}
                    </ul>
                </div>
            </div>

        </div>
    );
};
// function addedCart(){
//     const button =document.getElementById(cartButton)
//     button.addEventListener('click', function(){
//         console.log("Click me")
//     })
// return(
//     <div>

//     </div>
// )
// }

export default Product;