import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminNavbar() {

    const navigate = useNavigate();
    const [ user, setUser ] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/adminUser", { withCredentials: true }).then((response) => {
            if(response.data.error){
                alert("User not authenticated");
                navigate('/admin');
            } else {
                setUser(response.data);
            }
        })
    }, []);

    if( !user ){
        navigate('/admin');
    }

    return (
        <div>
            <h1>Admin Navbar</h1>
            <h1>{user.first_name}</h1>
            <img src={`http://localhost:3001/avatar/${user?.avatar_url}`}/>
        </div>
    )
}

export default AdminNavbar
