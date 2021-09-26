import React from 'react';
import './Cartname.css';

const Cartname = (props) => {
    const { cartinfo } = props
    // for showing added programmers name and picture
    return (
        <div className="cart-details">
            <div className="cart-info">
                <img src={cartinfo.img} alt="" />
            </div>
            <div className="cart-name">
                <h3>{cartinfo.name}</h3>
            </div>

        </div>
    );
};

export default Cartname;