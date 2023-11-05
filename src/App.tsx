import React, {ChangeEvent, useEffect, useLayoutEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter/Counter";
import SettingCounter from "./SettingCounter/SettingCounter";

type AlertTypes =  "enter values and press 'set' "| "Incorrect values"
function App() {
    let [minCount, setMinCount] = useState<number>(0)
    let [counter, setCounter] = useState<number>(minCount)
    const [maxCount, setMaxCount] = useState<number>(5)
    const [isError, setError] = useState<boolean>(false)
    const [errorAlert, setAlert]= useState<AlertTypes>("enter values and press 'set' ")


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

        setMinCount(minCount)
        setCounter(minCount)
        setMaxCount(maxCount)

    }
    const validationAlert = (isError: boolean) => {
        setError(isError)
    }

    return (
        <div className="App">
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
            />

        </div>
    );
}

export default App;
