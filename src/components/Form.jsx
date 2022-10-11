function Form() {
    
    function handleBlur(event){console.log(even.target.value)}
    function handleSubmit(){}

    return ( 
        <form onSubmit={handleSunmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"/>
            </div>
            <div>
                <label>Password
                <input type="password" onBlur={handleBlur}/>
                </label>
            </div>
        </form>
     );
}

export default Form;