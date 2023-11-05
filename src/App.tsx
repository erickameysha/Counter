import React, {ChangeEvent, useEffect, useLayoutEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter/Counter";
import SettingCounter from "./SettingCounter/SettingCounter";

export type AlertTypes = "enter values and press 'set' " | "Incorrect values"

function App() {
    let [minCount, setMinCount] = useState<number>(0)
    let [counter, setCounter] = useState<number>(minCount)
    const [maxCount, setMaxCount] = useState<number>(5)
    const [isError, setError] = useState<boolean>(false)
    const [errorAlert, setAlert] = useState<AlertTypes>("enter values and press 'set' ")
 const s =() => {
        let maxCountLS = localStorage.getItem('maxCount')
        if (maxCountLS) {
            let newValue = JSON.parse(maxCountLS)
            setMaxCount(newValue)
        }
     debugger
        let minCountLS = localStorage.getItem('minCount')
        if (minCountLS) {
            let minValue = JSON.parse(minCountLS)
            setMinCount(minValue)
            setCounter(minValue)
        }


    }

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
        localStorage.setItem('minCount', JSON.stringify(minCount))
        localStorage.setItem('maxCount', JSON.stringify(maxCount))
        setMinCount(minCount)
        setCounter(minCount)
        setMaxCount(maxCount)

    }
    const validationAlert = (isError: boolean) => {
        setError(isError)
    }
    const alertHandler = (alert: AlertTypes) => {
        setAlert(alert)
    }
    return (
        <div className="App">
            <button onClick={s}>k</button>
            <Counter
                isError={isError}
                counter={counter}
                maxCount={maxCount}
                incrementCount={incrementCount}
                resetCount={resetCount}
                alert={errorAlert}

            />
            <SettingCounter
                maxCount={maxCount}
                counter={counter}
                setValue={setValue}
                isError={isError}
                validationAlert={validationAlert}
                alerttHandler={alertHandler}
            />

        </div>
    );
}

export default App;
