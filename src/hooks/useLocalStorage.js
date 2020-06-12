import { useState } from 'react';

const useLocalStorage = (item, defaultValues) => {
    let INITIAL_STATE = localStorage.getItem(item) || defaultValues;
    const [state, setState] = useState(INITIAL_STATE);

    const setLocalStorage = (newItem) => {
        localStorage.setItem(item, newItem);
        setState(state => newItem)
        }
        

    return [state, setLocalStorage]
}


export default useLocalStorage;