import React from 'react';
import "./Programmer.css";
const Programers = (props) => {
    const { name, img, birthYear, country, age, creator, income, id } = props.programmer;
    return (

        <div className="col-md-4 ">
            <div className="programmers">
                <img src={img} alt="" />
                <h5>Name :{name}</h5>
                <h5>Countey:{country}</h5>
                <h6>Creator : {creator}</h6>
                <h5>Birth Year : {birthYear}</h5>
                <h5>Age : {age}</h5>
                <h5>Income:${income}</h5>
                <button onClick={() => props.handleAddToCart(props.programmer)} className="bg-success text-white fw-bold p-2 rounded m-3"><span className="text-warning p-1 m-2 "><i className="fas fa-cart-arrow-down"></i></span>Add to Cart</button>
            </div>
        </div>




    );
};

export default Programers;