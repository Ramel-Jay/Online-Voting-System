import React from 'react';
import { useNavigate } from "react-router-dom";

function welcome() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Admin Welcome Page</h1>
            <button onClick={() => navigate("/admin/register")} className="bg-gray-700 text-white">Register</button>
        </div>
    )
}

export default welcome
