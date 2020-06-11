import React, { useState } from 'react';


const useFilter = (method) => {
    const [state, setState] = useState([]);

        const getData = async (searchTerm) => {
            let data = await method(searchTerm);
            setState(data)
        }

        return [state, getData]

}

export default useFilter;