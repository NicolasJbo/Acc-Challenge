import { useState } from "react";
import './SearchInput.css'

const SearchInput = ({search}) =>{

    const [inputValue,setInputValue] = useState('pikachu');

    function handleChange(event){
        setInputValue(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        if( inputValue.trim().length <= 1) {
            alert('mas de 1 caracter')
           return;
        }else {
        search(inputValue);
        }
    }

    return(
        <>

            <form className="searchForm" onSubmit={handleSubmit}>
                <input className="searchInput" type="search" onChange={handleChange} placeholder="Enter a Pokemon to search" value={inputValue} />
            </form>
       
        </>
    );
}
export default SearchInput;