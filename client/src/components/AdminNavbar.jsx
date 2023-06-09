import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminNavbar() {

    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/getUser", { withCredentials: true }).then((response) => {
            if(response.data.error){
                alert("Please Login first");
                navigate('/admin');
            } else {
                setUser(response.data);
            }
        })
    }, []);

    return (
        <div>
            <h1>Admin Navbar</h1>
            <h1>{user.first_name}</h1>
        </div>
    )
}

export default AdminNavbar
