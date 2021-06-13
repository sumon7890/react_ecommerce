import React from 'react';

const Cart = (props) => {
 const cart = props.cart

var total = 0;
for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price
    
}
let shippingCost =0;
if(total>20){
    shippingCost = total + 15.20;
}
else if(total>0){
    shippingCost = total + 4.20;
}
let tex = total / 10;
let EstimatedTex =total/5;
let grandTotal = total+ shippingCost +tex+EstimatedTex;

const forMateNumber = num => {
    const pressies = num.toFixed(2)
    return  Number(pressies)
}
    return (
        <div>
            <div>
                <h1>Order Summary </h1>
                <h5>Items ordered : {props.cart.length}</h5>
            </div>
            <div>
                <table>
                    <tbody className="table" >
                        <tr>
                            <td>Items:</td>
                            <td className="tableQty">
                                ${forMateNumber(total)}
                            </td>
                        </tr>
                        <tr>
                            <td>Shipping & Handling:</td>
                            <td className="tableQty">
                                ${forMateNumber(shippingCost)}
                            </td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td className="tableQty">
                                ${forMateNumber(tex)}
                            </td>
                        </tr>
                        <tr>
                            <td>Estimated Tax:</td>
                            <td className="tableQty">
                                ${forMateNumber(EstimatedTex)}
                            </td>
                        </tr>
                        <tr class="total-row">
                            <td>Order Total:</td>
                            <td className="tableQty">
                                ${forMateNumber(grandTotal)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default Cart;