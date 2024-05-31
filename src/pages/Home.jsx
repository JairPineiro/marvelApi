import { useEffect, useState } from "react";
import { getMarvelCharacters } from "../services/characterServices";
import { SearchBar } from "../components/SearchBar";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("")
  const limit = 100; // Tamaño deseado de personajes
  const totalCharacters = 500; // Total de personajes a obtener

  const fetchData = async () => {
    try {
      const fetchedCharacters = [];
      const totalCalls = Math.ceil(totalCharacters / limit);

      // Realizar llamadas a la API con diferentes desplazamientos (offset) basado en la búsqueda
      for (let offset = 0; offset < totalCharacters; offset += limit) {
        console.log('Searching for:', search);
        const data = await getMarvelCharacters(offset, limit, search);
        fetchedCharacters.push(...data);
      }

      setCharacters(fetchedCharacters);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Marvel characters:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Llamada inicial al cargar la página
  }, [search]); // Dependencia 'search' para actualizar cuando se realice una búsqueda


  return (
    <div className="bg-body-tertiary">
      <SearchBar text= {search} setText={setSearch} search={fetchData}/>
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="row">
            {characters.map((character) => (
              <div key={character.id} className="col-md-3 mb-4">
                <div
                  className="card"
                  style={{ width: "20rem", height: "450px", marginTop: "40px" }}
                >
                  <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    className="card-img-top"
                    style={{ aspectRatio: 2 / 2, objectFit: "contain" }}
                    alt={character.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <a
                      href="#"
                      className="btn btn-info"
                      style={{ marginTop: 15 }}
                    >
                      More Info...
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
