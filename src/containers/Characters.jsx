import { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../assets/styles/character.css'

function Characters () {
    const[apiData, setApiData] = useState(null)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())  // convertir a json
        .then(data => setApiData(data))    //imprimir los datos en la consola
        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
    },[])

    return( 
        <div className="contenedor">
            <div className="registros">
                {
                    apiData && apiData.results.map (character => (
                        <Card
                            key={character.id}
                            name={character.name}
                            image={character.image}
                        />
                    ))
                }
            </div>
        </div>
     )
}

export default Characters;