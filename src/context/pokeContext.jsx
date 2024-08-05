
import { createContext, useContext, useState } from 'react';

const PokeContext = createContext();

export const usePoke = () => useContext(PokeContext);

// eslint-disable-next-line react/prop-types
export const PokeProvider = ({ children }) => {
    const [pokeSearch, setPoke] = useState({});

    const setPokeData = (pokeSearch, pokemon) => {       
        localStorage.setItem('Pokesearch', JSON.stringify({ pokeSearch, pokemon }));
        setPoke({ pokeSearch, pokemon });
    };

    const getPokeData = () => {
        return pokeSearch;
    };

    return (
        <PokeContext.Provider value={{ setPokeData, getPokeData }}>
            {children}
        </PokeContext.Provider>
    );
};