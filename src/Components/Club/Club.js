import React, { useEffect, useState } from 'react';
import './Club.css';
import Programer from '../Programmers/Programer';
import Cart from '../Cart/Cart';

const Club = () => {

    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./programmers.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, [])

    const handleAddToCart = (programmer) => {
        const newCart = [...cart, programmer];
        setCart(newCart);
        console.log(programmer.id)

    }

    return (

        <div>
            <div className="row">
                <div className="col-md-9 programmers-container">
                    <div className="row">
                        {
                            programmers.map(programmer => <Programer
                                key={programmer.id}
                                programmer={programmer}
                                handleAddToCart={handleAddToCart}
                            ></Programer>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart} ></Cart>
                </div>
            </div>


        </div >
    );
};

export default Club;