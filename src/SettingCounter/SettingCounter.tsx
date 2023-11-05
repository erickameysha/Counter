import React, {ChangeEvent, useEffect, useLayoutEffect, useState} from 'react';
import style from './Setting.module.css'

interface SettingCountProps {
    maxCount: number,
    counter: number,
    setValue: (minCount: number, maxCount: number) => void
    isError: boolean
    validationAlert: (isError: boolean) => void
}

const SettingCounter = ({maxCount, counter, setValue, validationAlert}: SettingCountProps) => {
    const [maxCountBable, setMaxCountBable] = useState<number>(maxCount)

    const [minCountBable, setMinCountBable] = useState<number>(counter)

    useEffect(() => {
        if (minCountBable < 0 || maxCountBable === minCountBable) {
            console.log('error')
            validationAlert(true)
        }else {
            console.log('not Error')
            validationAlert(false)
        }

    }, [maxCountBable, minCountBable])

    const setMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCountBable(+e.currentTarget.value)
        // validationAlert(maxCountBable, minCountBable)
    }

    const setMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinCountBable(+e.currentTarget.value)
    }
    const setClick = () => {
        setValue(minCountBable, maxCountBable)
    }
    return (
        <div className="">
            maxCount:
            <input  className={maxCountBable===minCountBable? style.error : ''} value={maxCountBable} onChange={setMaxCountHandler} type="number"/>
            minCount:
            <input className={minCountBable <0 || maxCountBable===minCountBable? style.error : ''} value={minCountBable} onChange={setMinCountHandler}
                   type="number"/>
            <button onClick={setClick}>set</button>
        </div>
    );
};

export default SettingCounter;