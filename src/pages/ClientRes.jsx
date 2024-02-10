import React from 'react'
import AuthHeader from '../partials/AuthHeader'
import Cookies from "universal-cookie";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
const ClientRes = () => {
    const cookies = new Cookies();
    let { course } = useParams();
    const token = cookies.get("TOKEN");
    const[loading,setLoading]=useState(true)
 
    useEffect(() => {
          
     
                 setTimeout(() => {
                  if(!token){
                   window.location.href="/login"
                  }
                 },[]);
               });
    const[res,setRes]=useState([]);
    async function fetchRes(){

        axios.defaults.headers.post['Content-Type'] ='multipart/form-data';
        await axios.get("http://localhost:3000/resources/"+course).then((response)=>{
       console.log(response.data)
          setRes(response.data);
        
        }).catch(error=>alert(error))
        
        }
      useEffect(() => {
     
       fetchRes()
       
        
      },[]);
     let t=0;   
     const formData=[]             
  return (
    <>
     <AuthHeader/> 
     <div className="flex flex-col w-full justify-center items-center md:px-40 md:py-20 sm:px-0 py-20">
   
  { res.map((cart)=>{  
    
   return( 
    <>
    <p className='font-bold text-2xl'>{cart.title}</p>
    <span className=' text-1xl'>{cart.desc}</span>
   <video   controls >
   <source src={`http://localhost:3000/res/${cart.resUrl}.mp4`} type="video/mp4"/>
   <source src="movie.ogg" type="video/ogg"/>
   Your browser does not support the video tag.
   </video></> )})}


</div>
    </>
  )
}

export default ClientRes
