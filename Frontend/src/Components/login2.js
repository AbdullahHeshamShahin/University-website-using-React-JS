
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
//import "./style.css";
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
    console.log("gamed")
  }

  const handlePassChange=(evt)=> {
  //   setState((prevState) =>{
  //     return{
  //       ...prevState,
  //       password: evt.target.value
  //     }
  //  } )
   const newstate={...state};
  //  console.log(newstate);
   newstate.password=evt.target.value;
   setState(newstate);
    
  }

return (


<div className=" bg-gray-800 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://lh6.ggpht.com/gNy40q6S_519oQZ_AE9sGypZ-Z94zDy2Xpm5Tg5mYf8yVOSLAxAhEatKLn0vJDyFErE=w300" alt="Workflow"/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Log In with your account
      </h2>
      
    </div>
    <form className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" className="sr-only">Email address</label>
          <input onChange={handleUserChange} id="email-address" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input onChange={handlePassChange} id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
      

    
      </div>

      <div>
        <a onClick={handleSubmit} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
          </span>
          Log In
        </a>
        <br></br>
            <a align="center" style={(state.error)?{display: 'block'}:{display: 'none'}}>{state.error}</a>
      </div>
    </form>
  </div>
</div>

)

}

export default Login;
