import React from 'react';


interface CounterProps {
    counter: number
    maxCount: number
    incrementCount: () => void
    resetCount: () => void
    isError: boolean
    alert: "enter values and press 'set' "| "Incorrect values"
}


const Counter = ({counter, maxCount, incrementCount, resetCount, alert, isError}: CounterProps) => {


    return (
        <div>
            <div className="">
                {
                    isError ? alert : <div className="">{counter}</div>
                }
                <button disabled={counter >= maxCount} onClick={incrementCount}>+</button>
                <button disabled={counter < maxCount} onClick={resetCount}>-</button>
            </div>
        </div>
    );
};

export default Counter;