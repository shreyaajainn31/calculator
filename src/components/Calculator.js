import React, { useState } from "react";
import './Calculator.css';


function Calculator(){

    const [num, setNum] = useState('');
    const [total, setTotal] = useState(0);

    const handleNumber1Change = e => {
        e.preventDefault();
        setNum(e.target.value);
    }
    const handleAddition =e => {
        e.preventDefault();
        setTotal(Number(total) + Number(num));
        setNum('');
    }

    const handleSubtraction = e => {
        e.preventDefault();
        setTotal(Number(total) - Number(num));
        setNum('');
    }
    const handleDivide = e => {
        e.preventDefault();
        setTotal((Number(total) / Number(num)).toFixed(2));
        setNum('');
    }
    const handleMultiply = e => {
        e.preventDefault();
        setTotal(Number(total) * Number(num));
        setNum('');
    }
    const handleClear= e=>{
        setTotal(0);
    }

    const handleFloor = e =>{
        e.preventDefault();
        setTotal(Math.floor(total));
        setNum('');
    }
    const handleCeil = e => {
        e.preventDefault();
        setTotal(Math.ceil(total));
        setNum('');
    }
    const handleRound = e =>{
        e.preventDefault();
        setTotal(Math.round(total));
        setNum('');
    }



    return (
        <div className = 'hello'>
            <input type ='number' placeholder="enter number" value = {num} onChange= {handleNumber1Change} className = 'number'/>
            <br></br>
            <br></br>
            <div className = 'operators'>
            <button onClick={handleAddition}>+</button>
            <button onClick={handleSubtraction} >-</button>
            <button onClick = {handleDivide}>/</button>
            <button onClick = {handleMultiply}>*</button>
            </div>
            <br></br>
            <div className="extra">
                <button onClick = {handleFloor}>Floor</button>
                <button onClick={handleCeil} >Ceil</button>
                <button onClick = {handleRound}>Round</button>
            </div>
            <br></br>
            <div className = 'reset'>
            <button onClick={handleClear} >Reset to 0</button>
            </div>

            <p>
                Total is: {Number(total).toFixed(2)}
            </p>
            
        </div>
    );

}

export default Calculator;
