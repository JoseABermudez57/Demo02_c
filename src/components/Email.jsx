import '../assets/styles/Fields.css'

function Email() {

    // Con el handle podemos meter las funciones dentro del onFocus
    const handleBlur = () => {
        console.log("Dejo de pucharle");
    }

    return ( 
        <div className="field">
            <label>Email: </label>
            <input type="text" id="usernme" onFocus={() => {console.log('Hola mundo')}} onBlur={handleBlur}/>  
        </div>
     );
}

export default Email;