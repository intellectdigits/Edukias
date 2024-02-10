import Header from "../partials/Header"
import { useState } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Signup = () => {
  const [startDate, setStartDate] = useState(new Date());
const[error,setError]=useState({email:"",fullname:"",category:"",course:"",instructor:"",start_date:"",start_time:"",price:""})
const[Data,setData]=useState({email:"",password:"",fullname:"",category:"",course:"",instructor:"",start_date:"",start_time:"",price:""})

const handleEmail=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})
if(value.trim()==""){
 setError({...error,email:"email must not be empty"})
}else{
  setError({...error,email:""})
}

}
const handlePassword=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})
if(value.trim()==""){
 setError({...error,password:"email must not be empty"})
}else{
  setError({...error,password:""})
}

}
const handleFullname=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})
if(value.trim()==""){
 setError({...error,fullname:"firstname must not be empty"})
}else{
  setError({...error,fullname:""})
}

}
const handleCategory=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})
if(value.trim()==""){
 setError({...error,category:"lastmame must not be empty"})
}else{
  setError({...error,category:""})
}

}
const handleCourse=(e)=>{
  const value=e.target.value;
const name =e.target.name;

setData({...Data,[name]:value})
if(value.trim()==""){
 setError({...error,course:"password must not be empty"})
}else{
  setError({...error,course:""})
}

}
const handleInstructor=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})
if(value.trim()==""){
 setError({...error,instructor:"password must not be empty"})
}else{
  setError({...error,instructor:""})
}

}

const handleStartTime=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})

if(value.trim()==""){
 setError({...error,start_time:"password must not be empty"})
}else{
  setError({...error,start_time:""})
}

}

const  handleSubmit=async (e)=>{
  e.preventDefault();
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  await axios.post("http://localhost:3000/subscription",{
    fullname: Data.fullname,
    category: Data.category,
    course:Data.course,
    startDate:Data.start_date,
startTime:Data.start_time,
    instructor:Data.instructor,
    email: Data.email, // sanitize
    password: Data.password,
  }).then(response=>console.log(response)).catch(error=>console.log(error))


}
    return (
        <>  <Header/>
        <div className="flex border justify-center">
      
<form className="my-20 w-full max-w-sm mx-auto"   onSubmit={handleSubmit}>
  <div className="mb-5">
    <label for="username-success" className="block mb-2 text-sm font-medium text-dark-700 dark:text-green-500">Email</label>
    <input type="text" onChange={handleEmail} value={Data.email} name="email" className="bg-white-50 border border-green-500 text-green-900 placeholder-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="email"/>
    {error.email==="email must not be empty"?<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{error.email}</span> </p>:""}
  </div>
  <div className="mb-5">
    <label for="username-success" className="block mb-2 text-sm font-medium text-dark-700 dark:text-green-500">Password</label>
    <input type="password" onChange={handlePassword} value={Data.password} name="password" className="bg-white-50 border border-green-500 text-green-900 placeholder-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Password"/>
    {error.email==="email must not be empty"?<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{error.email}</span> </p>:""}
  </div>
  <div className="mb-5">
    <label for="username-success" className="block mb-2 text-sm font-medium text-dark-700 dark:text-green-500">fullname</label>
    <input type="text" onChange={handleFullname} value={Data.fullname} name="fullname" className="bg-white-50 border border-green-500 text-green-900 placeholder-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="fullname"/>
    {error.fullname==="fullname must not be empty"?<p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>:""}
   </div>
   <div className="mb-5">
   <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
<select name="category" onChange={handleCategory} className="bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select Category</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
    {error.lastname==="lastmame must not be empty"?<p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>:""}
   </div>
   <div className="mb-5">
   <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
<select name="course" onChange={handleCourse} className="bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select Course</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
    {error.instructor==="lastmame must not be empty"?<p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>:""}
   </div>
   <div className="mb-5">
   <label for="countries" onChange={handleInstructor} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Instructor</label>
<select name="countries" className="bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
    {error.instructor==="lastmame must not be empty"?<p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>:""}
   </div>
  <div className="flex">
  <div className="mb-5">
    <label for="username-success" className="block py-1 mb-2 text-lg text-bold font-medium text-dark-700 dark:text-green-500">Start Date</label>
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
</div>
<div className="mb-5">
    <label for="username-success" className="block mb-2 text-lg text-bold font-medium text-dark-700 dark:text-green-500">Time</label>
    <input type="number" name="start_time" onChange={handleStartTime} value={Data.start_time} className="bg-white-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" />
    </div>
    </div>
  <div className="flex  justify-center">
      <button type="submit"  className="bg-regal-blue w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
       Submit
      </button>
     
    </div>
</form>

      </div>
      </>
        )

}



export default Signup;