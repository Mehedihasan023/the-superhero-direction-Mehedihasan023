import React from 'react';

import './Cart.css';
const Cart = (props) => {
    // destructring to put value of props in cart
    const { cart } = props;
    let total = 0;
    let Name = '';

    // for total calculation

    for (const programmer of cart) {
        total = total + programmer.income;
        Name = Name + programmer.name;

    }

    return (
        // for showing cart info
        <div className="cart-container">
            <h2><span><i className="fas fa-cart-arrow-down text-success"></i></span> Programmers Added: {cart.length}</h2>
            <h4> Total Cost : $ {total}</h4>
            <h5>Name :
                <br />
                {Name + ' '}
            </h5>
        </div>
    );
};

export default Cart;