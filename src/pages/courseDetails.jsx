import Header from "../partials/Header"
import { useState,useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import AuthHeader from "../partials/AuthHeader";
import {useParams} from "react-router-dom";
import { Audio,Circles } from 'react-loader-spinner';
const cookies = new Cookies();
const CourseDetails = () => {
    let { id } = useParams();
const token = cookies.get("TOKEN");
const[courses,setCourses]=useState([]);
const[total,setTotal]=useState();
const[title,setTitle]=useState();
const[loading,setLoading]=useState(true);
async function fetchCourses(){

  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  await axios.get(`http://localhost:3000/course/${id}`).then((response)=>{
  setLoading(false);
    setCourses(response.data);

  
  }).catch(error=>alert(error))
  
  }
  const[carts,setCarts]=useState([]);
  async function fetchCarts(){

    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    await axios.get(`http://localhost:3000/carts/${token.user}`).then((response)=>{
   
      setCarts(response.data);
     
   
      console.log("cate",response.data) 

    }).catch()
    
    }
  useEffect(() => {
    fetchCarts()
    fetchCourses()
    
    
   
  setTimeout(() => {
   if(!token){
    window.location.href="/login"

   }
   
  }, []);
},[]);
const addToCart=async ()=>{
  
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  await axios.post("http://localhost:3000/addCart",{

    totalPrice: courses.price, // sanitize
    user: token.user,
    title:courses.title
  }).then((response)=>{
    fetchCarts()
  }).catch(error=>alert(error))

}
    return (
        <> 

   <AuthHeader cartCount={carts.length}/>
   <div className="flex justify-around  items-center ml-25 overflow-x-scroll left-15">

 <div className=" px-10 left-20 min-w-180 rounded overflow-hidden shadow-lg cursor-pointer gap-5" >
 {loading&&<Circles
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"

/>}
  <img className="w-1/2" src={"http://localhost:3000/"+courses.imgUrl+".jpg"} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{courses.title}</div>
    <p className="text-gray-700 text-base">
    {courses.desc}    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <button onClick={addToCart} className="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Add To Cart</button>
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Buy Now</button>
  </div>
</div>

</div>
      </>
        )

}



export default CourseDetails;