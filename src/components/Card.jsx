import { useContext } from 'react';
import '../assets/styles/card.css'
import CharacterContext from '../context/CharacterContext';


function Card(props) {
  const value = useContext(CharacterContext);
  console.log(props.name + ": " + JSON.stringify(value)); 
  // npm install react-router-dom

  return (
    <div className="card-character">
      <img src={props.image}/>
      <span>{props.name}</span>
    </div>
  );
}

export default Card;
