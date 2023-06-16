import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Switcher from '../components/Switcher';

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

    const [open, setOpen] = useState(true);

    return (
        <div>
            
            {/* <h1>{user.first_name}</h1>
            <img src={`http://localhost:3001/avatar/${user?.avatar_url}`}/> */}
            <div className="flex">
                <div
                    className={` ${ open ? "w-72" : "w-20 " } bg-white dark:bg-gray-900 h-screen p-5  pt-8 relative duration-300`}
                >
                    <img
                        src="../src/assets/logo.png"
                        className={`absolute cursor-pointer -right-3 top-9 w-7 border-purple
                        border-2 rounded-full  ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    />
                    <div className="flex gap-x-4 items-center">
                    <img
                        src="../src/assets/logo.png"
                        className={`cursor-pointer duration-500 w-10 h-10 ${
                        open && "rotate-[360deg]"
                        }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${
                        !open && "scale-0"
                        }`}
                    >
                        Designer
                    </h1>
                    </div>
                    <ul className="pt-6">
                        <li>
                            <div className="">
                                <p>Dashboard</p>
                            </div>
                        </li>
                    </ul>
                    <Switcher/>
                </div>
                <div className="h-screen flex-1 p-7">
                    <h1 className="text-2xl font-semibold ">Home Page</h1>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar
