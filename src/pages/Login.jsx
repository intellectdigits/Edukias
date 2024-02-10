import Header from "../partials/Header"
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Audio,Circles } from 'react-loader-spinner';
const cookies = new Cookies();

const Login = () => {
const[error,setError]=useState({email:"",password:""})
const[Data,setData]=useState({email:"",password:""})
const[loading,setLoading]=useState(false);
const handleEmail=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})
if(value.trim()==""){
 setError({...error,email:"username must not be empty"})
}else{
  setError({...error,email:""})
}

}

const handlePassword=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})
if(value.trim()==""){
 setError({...error,password:"password must not be empty"})
}else{
  setError({...error,password:""})
}

}
const  handleSubmit=async (e)=>{

  e.preventDefault();
  setLoading(true);
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  await axios.post("http://localhost:3000/login",{

    email: Data.email, // sanitize
    password: Data.password,
  }).then((response)=>{
    setLoading(false);
    window.location.href="/client"
    cookies.set("TOKEN", response.data, {
      path: "/",
    });
  }).catch(error=>{setLoading(false);})


}
    return (
        <>  <Header/>
        <div className="flex border justify-center">
      
<form className="my-20 w-full max-w-sm mx-auto"  onSubmit={handleSubmit}>
 
  <div className="mb-5">
    <label for="username-success" className="block mb-2 text-sm font-medium text-dark-700 dark:text-green-500">Username</label>
    <input type="text" onChange={handleEmail} value={Data.email} name="email" className="bg-white-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="username"/>
    {error.email==="username must not be empty"?<p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>:""}
   </div>
   <div className="mb-5">
    <label for="username-success" className="block mb-2 text-sm font-medium text-dark-700 dark:text-green-500">Password</label>
    <input type="password" onChange={handlePassword} value={Data.password} name="password" className="bg-white-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="password"/>
    {error.password==="password must not be empty"?<p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>:""}
   </div>
 
  <div className="flex items-center justify-between">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
       {loading?<Circles
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"

/>:<p>login</p>}
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
</form>

      </div>
      </>
        )

}



export default Login;