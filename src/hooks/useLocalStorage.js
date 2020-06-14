import { useState } from 'react';

const useLocalStorage = (item, defaultValues) => {
    let INITIAL_STATE = JSON.parse(localStorage.getItem(item)) || defaultValues;
    const [state, setState] = useState(INITIAL_STATE);

    const setLocalStorage = (newItem) => {
        localStorage.setItem(item, JSON.stringify(newItem));
        setState(newItem)
        }
    return [state, setLocalStorage]
}


export default useLocalStorage;