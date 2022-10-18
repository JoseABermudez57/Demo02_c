import {useState} from 'react';

function Button() {

    const {name, setName} = useState('')
    const {lastname, setLastName} = useState('')
    const {username, setUsername} = useState('')
    const {password, setPassword} = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    const option = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: ,
        lastname: ,
        username: ,
        password: 
      })
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="button-style">
        <button>Iniciar sesion</button>
      </div>
    </form>
  );
}

export default Button;
