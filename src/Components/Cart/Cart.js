import React from 'react';

import './Cart.css';
const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    let Name = '';
    for (const programmer of cart) {
        total = total + programmer.income;
        Name = Name + programmer.name;

    }

    return (
        <div className="cart-container">
            <h2>Programmers Added: {cart.length}</h2>
            <h4> Total Cost : $ {total}</h4>
            <h5>Name :
                <br />
                {Name + '   '}
            </h5>
        </div>
    );
};

export default Cart;