import React from 'react'
import AuthHeader from '../partials/AuthHeader'
import Cookies from "universal-cookie";
import axios from "axios";
import { useState,useEffect } from "react";
const Cart = () => {
    const cookies = new Cookies();
  
    const token = cookies.get("TOKEN");
    const[loading,setLoading]=useState(true)
    const[sum,setSum]=useState(0)
    useEffect(() => {
          
     
                 setTimeout(() => {
                  if(!token){
                   window.location.href="/login"
                  }
                 },[]);
               });
    const[carts,setCarts]=useState([]);
    async function fetchCarts(){

        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        await axios.get(`http://localhost:3000/carts/${token.user}`).then((response)=>{
       
          setCarts(response.data);
         
       
          console.log("cate",response.data) 
          setLoading(false)
        }).catch(error=>alert(error))
        
        }
    
           
                useEffect(() => {
                  fetchCarts()
                 
         
                  },[]);
     let t=0;   
     const formData=[]             
  return (
    <>
     <AuthHeader cartCount={carts.length}/> 
     <div className="flex flex-col justify-center px-40 py-20">
     <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs text-left font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
    <tr>
      <th>Course Title</th>
     
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {!loading&& carts.map((cart)=>{ t=t+cart.totalPrice; formData.push({title:cart.title,user:cart.user,subDate:Date.now()})
   return <tr><td>{cart.title}</td><td>{cart?.totalPrice}</td><td><button onClick={async()=>{

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
await axios.post("http://localhost:3000/DelCart",{

  id:cart._id, // sanitize

}).then((response)=>{
  fetchCarts();
}).catch(error=>alert(error))

}} className="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
Remove From Cart
</button></td></tr>})}

  </tbody>
</table>
<span className="text-lg font-bold py-5">Total:{t}</span>{carts.length>0&&
<button type='button' className="bg-blue-300 hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 w-1/2 hover:border-transparent rounded"
onClick={async()=>{

  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  await axios.post("http://localhost:3000/CreateSub",{
  
    formData, // sanitize
  
  }).then((response)=>{
    fetchCarts();
    window.location.href="/learning"
  }).catch(error=>alert(error))
  
  }}> Buy Now</button>}
</div>
    </>
  )
}

export default Cart
