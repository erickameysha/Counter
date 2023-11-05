import React from 'react';


interface CounterProps {
    counter: number
    maxCount: number
    incrementCount: () => void
    resetCount: () => void
}


const Counter = ({counter, maxCount, incrementCount, resetCount}: CounterProps) => {


    return (
        <div>
            <div className="">
                <div className="">{counter}</div>
                <button disabled={counter >= maxCount} onClick={incrementCount}>+</button>
                <button disabled={counter< maxCount} onClick={resetCount}>-</button>
            </div>
        </div>
    );
};

export default Counter;