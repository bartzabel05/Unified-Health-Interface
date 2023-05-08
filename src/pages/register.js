import React, { useState } from 'react';
import "./register.css";

const Register = () =>{

    function handleSubmit(event){
        event.preventDefault();

        alert("Submitted");
    }

    return (
    <div className="mt-5 p-5">
        <form className="register-form" action="/register" method="post">
            <label>Hospital ID</label>
            <input className="input-field" type="text" placeholder="Enter Hospital Id" name="hname"></input>
            <label>Hospital Name</label>
            <input className="input-field" type="text" placeholder="Enter Hospital Name" name="hid"></input>
            <label>Enter Password</label>
            <input className="input-field" type="text" placeholder="Enter Password" name="Addr"></input>
            <label>Enter Address</label>
            <input className="input-field" type="password" placeholder="Enter Address" name="hpass"></input>
            <button className="submit-button" type="submit">Register</button>
        </form>
    </div>
    );
}

export default Register;

