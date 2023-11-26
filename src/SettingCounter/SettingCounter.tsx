import React, {ChangeEvent, useEffect, useLayoutEffect, useState} from 'react';
import style from './Setting.module.css'
import {AlertTypes} from "../App";
import InputComponent from "../components/InputComponent";

interface SettingCountProps {
    maxCount: number,
    counter: number,
    setValue: (minCount: number, maxCount: number) => void
    isError: boolean
    validationAlert: (isError: boolean) => void
    alerttHandler: (alert: AlertTypes) => void
}

const SettingCounter = ({maxCount, counter, setValue, validationAlert, alerttHandler}: SettingCountProps) => {
    const [maxCountBable, setMaxCountBable] = useState<number>(maxCount)

    const [minCountBable, setMinCountBable] = useState<number>(counter)

    useEffect(() => {
        if (minCountBable < 0 || maxCountBable === minCountBable || maxCountBable < minCountBable) {
            
            alerttHandler("Incorrect values")
            validationAlert(true)
        }
    }, [maxCountBable, minCountBable])

    const setMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCountBable(+e.currentTarget.value)
        alerttHandler("enter values and press 'set' ")
        validationAlert(true)
    }

    const setMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinCountBable(+e.currentTarget.value)
        alerttHandler("enter values and press 'set' ")
        validationAlert(true)
    }
    const setClick = () => {
        setValue(minCountBable, maxCountBable)
        validationAlert(false)
    }
    return (
        <div className="">
            <InputComponent/>
            maxCount:
            <input className={maxCountBable === minCountBable ? style.error : ''} value={maxCountBable}
                   onChange={setMaxCountHandler} type="number"/>
            minCount:
            <input className={minCountBable < 0 || maxCountBable === minCountBable ? style.error : ''}
                   value={minCountBable} onChange={setMinCountHandler}
                   type="number"/>
            <button onClick={setClick}>set</button>
        </div>
    );
};

export default SettingCounter;