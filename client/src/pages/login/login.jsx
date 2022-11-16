import React from "react"; 
import { setUser } from "../../utils/user";
import {  useNavigate } from 'react-router-dom';

const Login = ({ props }) => { 
    const navigate = useNavigate();


    const setUset = ()=>{
        setUser({ id: '1', name: 'robin',token:"nkabdh23g8o423hbb23hjkb8g23h4b233g43h2b7932o" })
        navigate("/dashboard");
    }   
    return (
        <>
            <button onClick={setUset} className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Loggedin</button>
        </>
    )
}

export default Login;