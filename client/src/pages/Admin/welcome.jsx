import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function welcome() {

    const navigate = useNavigate();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const login = () => {
        const data = { email: email, password: password };
        axios.post("http://localhost:3001/login", data, { withCredentials: "true" }).then((response) => {
            if(response.data.error){
                alert("Invalid email or password");
                navigate("/admin");
            } else {
                alert("Login Success!");
                navigate("/admin/dashboard");
            }
        });
    }

    return (
        <div>
            <h1>Admin Welcome Page</h1>
                <input placeholder="Email" type="email" onChange={(event) => {setEmail(event.target.value)}}/>
                <input placeholder='Password' type="text" onChange={(event) => {setPassword(event.target.value)}}/>
                <button type="submit" onClick={login}>Login</button>
        </div>
    )
}

export default welcome
