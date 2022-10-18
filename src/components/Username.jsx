import '../assets/styles/Fields.css'

function Username() {
    return ( 
        <div className="field">
            <label>Username: </label>
            <input type="text" id="usernme" value={username}/>  
        </div>
     );
}

export default Username;