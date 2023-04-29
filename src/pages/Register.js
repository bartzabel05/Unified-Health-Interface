const Register = () =>{

    function handleSubmit(event){
        event.preventDefault();

        alert("Submitted");
    }

    return (
        <form action="/register" method="post">
            <label>Hosp ID</label>
            <input type="text" placeholder="Enter Hosp ID" name="hid"></input>
            <label>Enter Password</label>
            <input type="text" placeholder="Enter Pass" name="hpass"></input>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;