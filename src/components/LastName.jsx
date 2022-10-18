import '../assets/styles/Fields.css'

function LastName() {
    return ( 
        <div className="field">
            <label>Last Name: </label>
            <input type="text" id="usernme" value={lastname}/>  
        </div>
     );
}

export default LastName;