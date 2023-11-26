import React, {ChangeEvent, useEffect, useLayoutEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter/Counter";
import SettingCounter from "./SettingCounter/SettingCounter";
import ButtonComponent from "./components/ButtonComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {CounterType, setCounter, setInitCounter} from "./store/CounterReducer";

export type AlertTypes = "enter values and press 'set' " | "Incorrect values"

function App() {
    const minCountr= useSelector<AppRootStateType,number>(state => state.counter.minCount)
    const counter= useSelector<AppRootStateType,number>(state => state.counter.count)
    const maxCountr= useSelector<AppRootStateType,number>(state => state.counter.maxCount)
      const dispatch = useDispatch()
    let [minCount, setMinCount] = useState<number>(0)
    // let [counter, setCounterr] = useState<number>(minCount)
    const [maxCount, setMaxCount] = useState<number>(5)
    const [isError, setError] = useState<boolean>(false)
    const [errorAlert, setAlert] = useState<AlertTypes>("enter values and press 'set' ")


    const s = () => {
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

    useLayoutEffect(() => {
        // let  initValue:CounterType = {count: 0, maxCount: 5,minCount: 0}
        dispatch(setInitCounter(6,0,0))
    }, [])
    const incrementCount = () => {

        if (counter != maxCountr) {
            console.log(counter)
            dispatch(setCounter(counter+1))
        }
    }
    const resetCount = () => {    dispatch(setCounter(minCountr))
    }
    const setValue = (minCount: number, maxCount: number) => {
        localStorage.setItem('minCount', JSON.stringify(minCount))
        localStorage.setItem('maxCount', JSON.stringify(maxCount))
        setMinCount(minCount)
        // setCounterr(minCount)
        dispatch(setCounter(minCount))
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
            {/*<ButtonComponent/>*/}
            <Counter
                isError={isError}
                counter={counter}
                maxCount={maxCountr}
                incrementCount={incrementCount}
                resetCount={resetCount}
                alert={errorAlert}

            />
            <SettingCounter
                maxCount={maxCountr}
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
