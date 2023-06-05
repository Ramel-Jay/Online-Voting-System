import React, {useState, useEffect} from 'react';
import axios from 'axios';

function register() {

    const [first_name, setFirst_Name]           = useState("");
    const [last_name, setLast_Name]             = useState("");
    const [gender, setGender]                   = useState("");
    const [address, setAddress]                 = useState("");
    const [mobile_number, setMobile_Number]     = useState("");
    const [role, setRole]                       = useState("");
    const [email, setEmail]                     = useState("");
    const [password, setPassword]               = useState("");
    const [avatar_url, setAvatar_Url]           = useState(null);

    const [adminUsers, setAdminUsers]           = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append("first_name", first_name);
        data.append("last_name", last_name);
        data.append("gender", gender);
        data.append("address", address);
        data.append("mobile_number", mobile_number);
        data.append("role", role);
        data.append("email", email);
        data.append("password", password);
        data.append("avatar_url", avatar_url);

        axios.post("http://localhost:3001/AdminProfile", data ).then((response) => {
            if(response.data.error){
                console.log(response.data.error);
                alert("Invalid Input");
            }else{
                alert("Registration Complete");
            }
        })

    }

    useEffect(() => {
        axios.get("http://localhost:3001/").then((response) => {
            if(response.data.error){
                alert(response.data.error);
            }
            else {
                setAdminUsers(response.data);
            }
        });
    }, []);

    return (
        <div>
            <h1>Register a new Admin</h1>
            <div>
                <form onSubmit={onSubmit} encType='multipart/form-data'>
                    <input
                    placeholder="First Name"
                        className="bg-gray-400"
                        autoComplete='off'
                        type="text"
                        id="first_name"
                        onChange={(event) => setFirst_Name(event.target.value)}
                        required
                    />
                    <input
                        className="bg-gray-400"
                        autoComplete='off'
                        type="text"
                        id="last_name"
                        onChange={(event) => setLast_Name(event.target.value)}
                        placeholder='Last Name'
                        required
                    />
                    <input
                        className="bg-gray-400"
                        autoComplete='off'
                        type="text"
                        id="gender"
                        placeholder='gender'
                        onChange={(event) => setGender(event.target.value)}
                        required
                    />
                    <input
                        className="bg-gray-400"
                        autoComplete='off'
                        type="text"
                        id="address"
                        placeholder='address'
                        onChange={(event) => setAddress(event.target.value)}
                        required
                    />
                    <input
                        className="bg-gray-400"
                        autoComplete='off'
                        type="number"
                        id="mobile_number"
                        placeholder='Mobile Number'
                        onChange={(event) => setMobile_Number(event.target.value)}
                        required
                    />
                    <input
                        className="bg-gray-400"
                        autoComplete='off'
                        type="text"
                        id="role"
                        placeholder='role'
                        onChange={(event) => setRole(event.target.value)}
                        required
                    />
                    <input
                        className="bg-gray-400"
                        autoComplete='off'
                        type="text"
                        id="email"
                        placeholder='email'
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <input
                        className="bg-gray-400"
                        autoComplete='off'
                        type="text"
                        id="password"
                        placeholder='password'
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                    <input
                        className="bg-gray-400"
                        autoComplete='off'
                        type="file"
                        id="avatar_url"
                        onChange={(event) => setAvatar_Url(event.target.files[0])}
                        required
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
                
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            adminUsers.map((value, key) => {
                                return(
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center" key={key}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                                            <img className="w-10 h-10 rounded-full mr-3" src={`http://localhost:3001/avatar/${value?.avatar_url}`}/> <p >{value.first_name} {value.last_name}</p>
                                        </th>
                                        <td className="px-6 py-4">
                                            <p>{value.gender}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p>{value.address}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p>{value.mobile_number}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p>{value.email}</p>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default register
