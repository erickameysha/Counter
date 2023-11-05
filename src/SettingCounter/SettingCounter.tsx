import React, {ChangeEvent, useState} from 'react';

interface SettingCountProps {
    maxCount: number,
    counter: number,
    setValue: (minCount: number, maxCount: number) => void
}

const SettingCounter = ({maxCount, counter, setValue}: SettingCountProps) => {
    const [maxCountBable, setMaxCountBable] = useState<number>(maxCount)

    const [minCountBable, setMinCountBable] = useState<number>(counter)


    const setMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCountBable(+e.currentTarget.value)
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
            <input value={maxCountBable} onChange={setMaxCountHandler} type="number"/>
            minCount:
            <input value={minCountBable} onChange={setMinCountHandler} type="number"/>
            <button onClick={setClick}>set</button>
        </div>
    );
};

export default SettingCounter;