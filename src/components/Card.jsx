import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Card.css'
import { useState } from 'react';

const Card = () => {

    const [val, setVal] = useState(0);

    const incrementFun = () => {
        setVal(val + 1);
    }

    const decrementFun = () => {
        if(val > 0){
            setVal(val - 1);
        }else {
            alert("Value can not be less than 0");
        }
    }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <div className='card w-75' >
            <div className='card-body'>
                <h1 className="text-center display-1">{val}</h1>
                <div className="d-flex justify-content-between mt-5">
                    <button className="btn btn-primary btn-lg" onClick={incrementFun}>+</button>
                    <button className="btn btn-danger btn-lg" onClick={decrementFun}>-</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card