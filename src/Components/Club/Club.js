import React, { useEffect, useState } from 'react';
import './Club.css';
import Programer from '../Programmers/Programer';
import Cart from '../Cart/Cart';

const Club = () => {
    // use useffect for changing state
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);
    // fetch data 
    useEffect(() => {
        fetch('./programmers.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, [])
    //   handle cart  operation
    const handleAddToCart = (programmer) => {
        const newCart = [...cart, programmer];
        setCart(newCart);
    }

    return (

        <div>
            {/* for showing programmers */}
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

                {/* for adding programmers on cart */}

                <div className="col-md-3">
                    <Cart cart={cart} ></Cart>
                </div>
            </div>


        </div >
    );
};

export default Club;