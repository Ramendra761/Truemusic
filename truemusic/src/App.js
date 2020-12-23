import React, {useEffect,useState}from 'react'
import './App.css'
import Login from "./Login"
import Player from "./Player.js";
import { getTokenFromUrl } from './spotify';
import spotifywebapi from "spotify-web-api-js";
import SpotifyWebApi from 'spotify-web-api-js';
//npm i spotify-web-api-js   spotify buildapi to use connect their service and this is wrapper
const spotify=new SpotifyWebApi();

// we are going to learn useeffect hook 
//useeffect run code based on given condition 
//it runs function or code i function

function App() {
  const[token,setToken]= useState(null);//it acts as a short term memory losses on refresh
  useEffect(() => {
    const test = getTokenFromUrl();
    //console.log("I have a token >",hash);
    window.location.hash = ""; //we dont want access oken i url so we clear up
    const _token = test.access_token;//token overlap so we use_
    if(_token){
      setToken(_token);
      //we are connecting spotify to our project
      spotify.setAccessToken(_token);//give access token to spotify api to connect spotify api  in our project
      spotify.getMe().then(user=>{
        console.log("show if user exist=>", user);
      })
    }
    //console.log("I have a token >",token);
  }, []);//we use to give value in [] to run multiple times else keep clean for eg [name] of [name,age]

  return (
    <div>
      {/* <h1>react</h1> */}
      {/* spotify logo  */}
      {/* spotify button */}
      {token ? (
        <Player/>
      ):
     ( <Login />)}
    </div>
  );
}

export default App
