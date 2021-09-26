import React from 'react';
import "./Programmer.css";
const Programers = (props) => {
    // desctructuring to get value from props
    const { name, img, birthYear, country, age, creator, income, } = props.programmer;
    return (

        // for showing each programmers info 
        <div className="col-md-4 ">
            <div className="programmers">
                <img src={img} alt="" />
                <h5>Name :{name}</h5>
                <h5>Countey:{country}</h5>
                <h6>Creator : {creator}</h6>
                <h5>Birth Year : {birthYear}</h5>
                <h5>Age : {age}</h5>
                <h5>Income:${income}</h5>

                {/* click handler for cart  */}
                <button onClick={() => props.handleAddToCart(props.programmer)} className="bg-success text-white fw-bold p-2 rounded m-3"><span className="text-warning p-1 m-2 "><i className="fas fa-cart-arrow-down"></i></span>Add to Cart</button>
            </div>
        </div>




    );
};

export default Programers;