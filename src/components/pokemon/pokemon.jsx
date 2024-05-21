import Navbar from "../navbar/navbar"
import"./pokemon.css"
const Pokemon = () => {

 
  return (<><div className="container-pokemon">
            <Navbar></Navbar>
            
                <div className="searchBox">
                   <h1>Buscar Pokemon</h1>
                </div>
                <div className="tableBox">
                    <h1>Tabla de pokemones</h1>
                </div>

            </div>
  </>);
};

export default Pokemon;
