import usePokeFetch from "../../Hooks/usePokeFetch";
import PokeList from "../PokeList/PokeList";
import SearchInput from "../SearchInput/SearchInput";
import Navbar from "../navbar/navbar";
import "./pokemon.css";
const Pokemon = () => {

  const { pokemons, isLoading ,onError,getPokeEvolution,} = usePokeFetch();

  async function handleSearch(name){  
      await getPokeEvolution(name);
  }

  return (<>
  <div className="container-pokemon">
            <Navbar></Navbar>            
                <div className="searchBox">
                   <h1>Buscar Pokemon</h1>
                  <SearchInput search={handleSearch}></SearchInput>                
                </div>
                <div className="tableBox">
                    <h1>Tabla de Evoluciones</h1>
                    {
                     isLoading && <h2>Loading...</h2> 
                    }
                    {onError && <h2> {onError}</h2>
                    
                    }
                    { pokemons &&
                        <PokeList pokemon={pokemons}></PokeList>
                    }
                </div>
          

            </div>
  </>);
};

export default Pokemon;
