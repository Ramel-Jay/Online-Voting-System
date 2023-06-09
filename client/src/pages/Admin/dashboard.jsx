import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from '../../components/AdminNavbar';

function dashboard() {

  const navigate = useNavigate();

  const logout = () => {
      axios.get("http://localhost:3001/logout", {withCredentials: true}).then((response) => {
        if(response.data.error){
          alert("Response error");
        }else{
          alert("Logged out");
          navigate("/admin");
        }
      })
  }

  return (
    <div>
        <AdminNavbar/>
        <h1>Dashboard</h1>
        <button onClick={() => navigate("/admin/register")} className="bg-gray-700 text-white">Register</button>
        <button type="submit" onClick={logout}>Log Out</button>
    </div>
  )
}

export default dashboard
