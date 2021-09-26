import React from 'react';
import "./Programmer.css";
const Programers = (props) => {
    const { name, img, birthYear, country, age, creator, income, id } = props.programmer;
    return (

        <div className="col-md-4 ">
            <div className="programmers">
                <img src={img} alt="" />
                <h4>Name :{name}</h4>
                <h4>Countey:{country}</h4>
                <h4>Creator : {creator}</h4>
                <h4>Birth Year : {birthYear}</h4>
                <h4>Age : {age}</h4>
                <h4>Income:${income}</h4>
                <button onClick={() => props.handleAddToCart(props.programmer)} className="bg-success text-white fw-bold p-2 rounded m-3"><span className="text-warning p-1 m-2 "><i className="fas fa-cart-arrow-down"></i></span>Add to Cart</button>
            </div>
        </div>




    );
};

export default Programers;