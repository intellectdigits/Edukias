import Header from "../partials/Header"
import { useState,useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import AuthHeader from "../partials/AuthHeader";
import { Carousel } from 'flowbite-react';
import { Audio,Circles } from 'react-loader-spinner';
import { Link } from "react-router-dom";
const cookies = new Cookies();
const ClientDash = () => {
const[error,setError]=useState({email:"",firstname:"",lastname:"",password:""})
const[Data,setData]=useState({email:"",firstname:"",lastname:"",password:""})
const[carts,setCarts]=useState([]);
const[loading,setLoading]=useState(true);
const token = cookies.get("TOKEN");
const[tabActive,settabActive]=useState(true);
const[tab,setTab]=useState("Software Development");
useEffect(() => {
  
  setTimeout(() => {
   if(!token){
    window.location.href="/login"
   }
  }, []);
});
async function fetchCarts(){

  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  await axios.get(`http://localhost:3000/carts/${token.user}`).then((response)=>{
 
    setCarts(response.data);
   
 
    console.log("cate",response.data) 
  
  }).catch(error=>alert(error))
  
  }
const[courses,setCourses]=useState([]);
async function fetchCourses(){

  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  await axios.get("http://localhost:3000/courses/"+tab).then((response)=>{
    setLoading(false);
    setCourses(response.data);
  
  }).catch(error=>alert(error))
  
  }

  useEffect(() => {
   fetchCarts()
   fetchCourses();
    
  },[tab]);
console.log("courses",courses)

    return (
        <>  <AuthHeader cartCount={carts.length}/>
     
        <div className="h-30 sm:h-64 xl:h-40 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div class="absolute top-10 left-10 bg-white h-40"><p>Code your future</p></div>
          <img
            src="./assets/img/doctor.png"
            alt="logo"
            className="hidden xl:block h-screen w-full object-cover bg-no-repeat"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
            src="./assets/img/teach.jpg"
            alt="logo"
            className="hidden xl:block h-screen w-full object-cover bg-no-repeat"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
            src="./assets/img/teacher.jpg"
            alt="logo"
            className="hidden xl:block h-screen w-full object-cover bg-no-repeat"
          />
        </div>
      </Carousel>
    </div>
    <p className="font-bold text-3xl mt-11  mb-2">What to learn next</p> 

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
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#100</span>
            
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



export default ClientDash;