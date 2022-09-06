import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import "./style.css";
import axios from 'axios'

//import loginImg from "../../login.svg";

const jwt= require('jsonwebtoken')


function Login(props) {
  const history = useHistory();
  const [state, setState] = useState(
    {
      username: '',
      password: '',
      error: '',
    }
  );


  async function handleSubmit(evt) {
    console.log(state.username);
    console.log(state.password);
    console.log("click")

    if (!state.username) {
      const newstate={...state};
      newstate.error='Username is required';
      setState(newstate);
      return newstate;
    }

    if (!state.password) {
      const newstate={...state};
      newstate.error='Password is required';
      setState(newstate);
      return newstate;
    }
    const newstate={...state};
      newstate.error='';
      setState(newstate);
const loginData={
  email:state.username,
  password:state.password
}

    axios.post('http://localhost:8080/logIn' , loginData)
        .then((res) => {
          console.log(res.data);
          const token=res.data;
          var decodedUser = jwt.verify(token, '25235325');
          props.updateUser(decodedUser, token);
          console.log("ahmed" + decodedUser);
          history.push("/");
        }) 
        .catch((err)=>{
          console.log(" ERROR in login");
           const newstate={...state};
           if(!err || !err.response || !err.response.data){
            newstate.error='Access denied';
           }
           else{
              newstate.error=err.response.data;
           }
          setState(newstate);
        })
   }

  const handleUserChange=(evt)=>{
  //   setState((prevState) =>{
  //     return{
  //       ...prevState,
  //       username: evt.target.value
  //     }
  //  } )
    const newstate={...state};
    // console.log(newstate);
    newstate.username=evt.target.value;
    setState(newstate);
  }

  const handlePassChange=(evt)=> {
   const newstate={...state};
  //  console.log(newstate);
   newstate.password=evt.target.value;
   setState(newstate);
    
  }


    return (
      <div className="maindiv">
      


        <link rel="stylesheet" href="css/style.css" />
        <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        <title>Sign in</title>
        <div className="main">
          <p className="sign" align="center">Log in</p>
          <form className="form1">

          <input className="un " type="text" data-test="username" value={state.username} onChange={handleUserChange} placeholder="UserName" />
          <br></br>
          <input className="pass" type="password" data-test="password" value={state.password} onChange={handlePassChange} placeholder="password" />

          <br></br>
         
            <a className="submit" align="center" onClick={handleSubmit}>Log in</a>
            <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
            <br></br>
            <a align="center" style={(state.error)?{display: 'block'}:{display: 'none'}}>{state.error}</a>
            
            </form></div>
        </div>
    );
  }

export default Login;
