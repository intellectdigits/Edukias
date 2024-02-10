import Header from "../partials/Header"
import { useState,useEffect } from "react";
import axios from "axios";
import banner from "../assets/img/doctor.png"
import AuthHeader from "../partials/AuthHeader";
import { Audio,Circles } from 'react-loader-spinner';
import {Link} from "react-router-dom";
const Home = () => {
  const isAuth=true;
  const[courses,setCourses]=useState([]);
  const[loading,setLoading]=useState(true);
  const[tabActive,settabActive]=useState(true);
  const[tab,setTab]=useState("Software Development");
async function fetchCourses(){

  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  await axios.get("http://localhost:3000/courses/"+tab).then((response)=>{
  
    setCourses(response.data);
    setLoading(false);
  
  }).catch(error=>alert(error))
  
  }

  useEffect(() => {

   fetchCourses();

    
  },[tab]);
    return (
      <>
   {isAuth?<Header/>:<AuthHeader/>}
      <div className="flex flex-row justify-center items-center z-0  bg-regal-blue">
         <div className="sm:w-420 items-center  flex-center flex-col"><p className="md:text-7xl text-3xl  text-white mt-50">Best Online Education Platform</p> <p className="md:text-3xl sm:1xl mt-5 text-white my-3">Be the best in your career and skills,
         we offer the best online courses and live Classes</p>
    <div className="flex">
    <button onClick={()=>location.href="/signup"} className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Get Started
</button> 
<button onClick={()=>location.href="/login"} className="bg-white hover:bg-gray-100 mx-3 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
 Login
</button>
    </div>
 </div>
 <img
            src={banner}
            alt="logo"
            className="sm:relative xl:block  w-1/2 z-:0"
          />
          </div>
          <h1  className="text-4xl py-5 text-black font-bold">Popular Courses</h1>
          

<div className="text-lg font-4xl w-full text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 ">
    <ul className="flex flex-wrap -mb-px ">
        <li className="me-2">
        <Link  onClick={()=>setTab("Software Development")} className={tab=="Software Development"?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":
      "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}  aria-current="true">Software Development</Link>
        </li>
        <li className="me-2">
        <Link href="#" onClick={()=>setTab("Business")} className={tab=="Business"?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":
      "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}  aria-current="true">Business</Link>
        </li>
        <li className="me-2">
        <Link href="#" onClick={()=>setTab("Accounting")} className={tab=="Accounting"?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":
      "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}  aria-current="true">Accounting</Link>
        </li>
        <li className="me-2">
        <Link href="#" onClick={()=>setTab("Design")} className={tab=="Design"?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":
      "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}  aria-current="true">Design</Link>
        </li>
        <li>
        <Link  onClick={()=>setTab("PhotoGraphy")} className={tab=="PhotoGraphy"?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":
      "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}  aria-current="true">Photography</Link>
        </li>
    </ul>
</div>

          <div className="sm:flex flex-col w-full overflow-x-hidden  md:grid grid-cols-4 gap-4 justify-center items-center my-5">
          
          { courses.map((course)=>{return <div className="max-w-sm px-10 left-20 min-w-80 rounded overflow-hidden shadow-lg cursor-pointer gap-5" onClick={()=>{location.href=`course/${course._id}`}}>
  <img className="w-full" src={"http://localhost:3000/"+course.imgUrl+".jpg"} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  
    <div className="font-bold text-xl mb-2">{course.title}</div>
    <p className="text-gray-700 text-base">
    {course.desc}    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">NGN{course.price}</span>
  
  </div>
</div>})}
{loading&&<Circles
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"

/>}
</div>    
        
    </>
    )
}



export default Home;