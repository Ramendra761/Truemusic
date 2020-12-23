// //https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start#
export const authEndpoint=
"https://accounts.spotify.com/authorize";
const redirectUrl="http://localhost:3000/";
const clientId = "83f3a92999434e599f6a4515281ea23a";
const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
export const getTokenFromUrl=()=>{
    return window.location.hash //we can see local host 3000 and hash

      .substring(1)
      .split("&")
      .reduce((initial,item)=>
      {//access token=my_key_&name=ramendra_&_gjy
        let parts=item.split('=');
        //for access token niche  decode the component
        initial[parts[0]]=
        decodeURIComponent(parts[1]);
          return initial;


      },{});

 }
//now we will generate the webaddress
export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
                     //              ?>adding parameter                                        joins all scopes        //gives back a token of authentication that its my id
