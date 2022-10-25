import '../assets/styles/card.css'

function Card(props) {
  return (
    <div className="card-character">
      <img src={props.image}/>
      <span>{props.name}</span>
    </div>
  );
}

export default Card;
