import '../assets/styles/Fields.css'

function Name() {
    return ( 
        <div className="field">
            <label>Name: </label>
            <input type="text" id="usernme" value={name}/>  
        </div>
     );
}

export default Name;
