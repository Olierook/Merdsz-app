import { useDb } from './../context/dbContext';
import { useState } from 'react';

const currentRound = 0;


export const useValue = (string) => {
    const {db, ref, set, onValue} = useDb()
    const [value, setValue] = useState()
    const thisRef = ref(db, string);

    onValue(thisRef, (e) => {
        const data = e.val();
        if ( JSON.stringify(data) !== JSON.stringify(value) ) {
          setValue(data)
        }
    })

    const updateValue = (v) => {
        set(thisRef, v)
    }

    return [value, updateValue]
}

export const useDuration = () => useValue("config/time-duration")
export const useTimestamp = () => useValue("config/timestamp-refresh")
export const useCurrentRound = () => useValue("config/current-round")
export const useRoundConfig = () => useValue(`rounds/${currentRound}/config`)
export const useBlue = () => useValue(`rounds/${currentRound}/blue`)
export const useRed = () => useValue(`rounds/${currentRound}/red`)
export const useGreen = () => useValue(`rounds/${currentRound}/green`)

export const useCount = (c)=> useValue(`rounds/${currentRound}/${c}/current`)
export const useTitle = (c)=> useValue(`rounds/${currentRound}/${c}/title`)
export const useUpcomingTitle = (c)=> useValue(`rounds/${currentRound}/${c}/upcoming`)