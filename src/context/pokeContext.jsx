
import { createContext, useContext, useState } from 'react';

const PokeContext = createContext();

export const usePoke = () => useContext(PokeContext);

// eslint-disable-next-line react/prop-types
export const PokeProvider = ({ children }) => {
    const [pokeSearch, setPoke] = useState(null);

    const setPokeData = ( pokemon) => {      
        console.log("pokemon:",pokemon); 
        setPoke( pokemon );
    };

    const getPokeData = () => {
        return pokeSearch;
    };

    return (
        <PokeContext.Provider value={{ setPokeData, getPokeData,pokeSearch}}>
            {children}
        </PokeContext.Provider>
    );
};