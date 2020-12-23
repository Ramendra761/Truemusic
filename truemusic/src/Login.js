import React from 'react'
import tresk from'./Trekster.JPG';
import './login.css';
import{loginUrl}from './spotify';
function Login() {
    return (
        <div className="login">
            
            <img className="img" src={tresk} alt=""></img>
            <a href={loginUrl}className="button">Login With TrueMusic</a>
        </div>
    )
}

export default Login
