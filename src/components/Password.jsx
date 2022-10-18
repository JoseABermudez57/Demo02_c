import '../assets/styles/Fields.css'

function Password() {
    return ( 
        <div className="field">
            <label>Password: </label>
            <input type="password" value={password}/>
        </div>
     );
}

export default Password;