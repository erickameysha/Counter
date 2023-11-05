import React, {ChangeEvent, useEffect, useLayoutEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter/Counter";
import SettingCounter from "./SettingCounter/SettingCounter";

function App() {
    let [minCount, setMinCount] = useState<number>(0)
    let [counter, setCounter] = useState<number>(minCount)
    const [maxCount, setMaxCount] = useState<number>(5)



    useLayoutEffect(() => {
        setMaxCount(5)
    }, [])

    useEffect(() => {
        console.log("c " + counter)
    }, [counter])
    const incrementCount = () => {

        if (counter != maxCount) {
            console.log(counter)
            setCounter(counter = counter + 1)
        }
    }

    const resetCount = () => {
        setCounter(minCount)
    }
    const setValue = (minCount: number, maxCount: number) => {
        console.log('r')
            setMinCount(minCount)
        setCounter(minCount)
            setMaxCount(maxCount)

    }
    const validationAlert = () => {
      
    }

    return (
        <div className="App">
            <Counter
                counter={counter}
                maxCount={maxCount}
                incrementCount={incrementCount}
                resetCount={resetCount}

            />
            <SettingCounter
                maxCount={maxCount}
                counter={counter}
                setValue={setValue}
            />

        </div>
    );
}

export default App;
