import React from 'react'
import AuthHeader from '../partials/AuthHeader'
import Cookies from "universal-cookie";
import axios from "axios";
import { useState,useEffect } from "react";
const Learning = () => {
    const cookies = new Cookies();
  
    const token = cookies.get("TOKEN");
    const[loading,setLoading]=useState(true)
 
    useEffect(() => {
          
     
                 setTimeout(() => {
                  if(!token){
                   window.location.href="/login"
                  }
                 },[]);
               });
    const[learning,setLearning]=useState([]);
    async function fetchLearning(){

        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        await axios.get(`http://localhost:3000/learning/${token.user}`).then((response)=>{
       
          setLearning(response.data);
         
       
          console.log("cate",response.data) 
          setLoading(false)
        }).catch(error=>alert(error))
        
        }
    
           
                useEffect(() => {
                  fetchLearning()
                 
         
                  },[]);
     let t=0;   
     const formData=[]             
  return (
    <>
     <AuthHeader/> 
     <div className="flex flex-col justify-center px-40 py-20">
     <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs text-left font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
    <tr>
      <th>Course Title</th>
     
      <th>Start Date</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {!loading&& learning.map((cart)=>{  
   return <tr><td>{cart.title}</td><td>{cart?.subDate}</td><td><button onClick={()=>location.href="/myres/"+cart.title}  className="bg-transparent px-5 hover:bg-dark-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Resources
</button><button onClick={()=>window.location.href="/classes"} className="bg-transparent px-5  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-red-blue hover:border-transparent rounded">
Schedule Live Class
</button>
<button onClick={async()=>{

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
await axios.post("http://localhost:3000/DelLeraning",{

  id:cart._id, // sanitize

}).then((response)=>{
  fetchLearning();
}).catch(error=>alert(error))

}} className="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
Remove From Learning
</button></td></tr>})}

  </tbody>
</table>


</div>
    </>
  )
}

export default Learning
