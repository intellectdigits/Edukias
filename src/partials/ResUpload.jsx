import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function ResUpload() {
 // const navigate = useNavigate();
const[courses,setCourses]=useState([]);
const[res,setRes]=useState([]);
const[cos,setCourse]=useState();
const[loading,setLoading]=useState(false);
const history = useNavigate();
const[Data,setData]=useState({title:"",desc:""})
const [image, setImage] = useState({ preview: '', data: '' })
const [status, setStatus] = useState('')
const handleTitle=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})


}

const handleDesc=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})


}

async function fetchCourses(){

  axios.defaults.headers.post['Content-Type'] ='multipart/form-data';
  await axios.get("https://edukiaapi.onrender.com/AllCourses").then((response)=>{
  
    setCourses(response.data);
  
  }).catch(error=>alert(error))
  
  }
  async function fetchRes(){

    axios.defaults.headers.post['Content-Type'] ='multipart/form-data';
    await axios.get("https://edukiaapi.onrender.com/resources").then((response)=>{
    
      setRes(response.data);
    
    }).catch()
    
    }
  useEffect(() => {
   fetchRes()
   fetchCourses();
    
  },[]);
  const  handleSubmit=async (e)=>{
    e.preventDefault();
    let formData = new FormData()
    formData.append('file', image.data)
    formData.append('title', Data.title)
    formData.append('desc', Data.desc)
    formData.append('course', cos)
   
    await axios.post("https://edukiaapi.onrender.com/addRes",formData,{headers: {'Content-Type': 'multipart/form-data'}}).then((response)=>{
      fetchRes()
    }).catch(error=>alert(error))
  
  
  }
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
     
       <table className="table-auto w-full">
   <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
   <tr>
   <th className="p-2 whitespace-nowrap">Course Title</th>
   <th className="p-2 whitespace-nowrap">Resource Title</th>
   
   <th className="p-2 whitespace-nowrap">Resource Description</th>
 
   <th className="p-2 whitespace-nowrap">Actions</th>
    </tr>
  </thead>
 
  <tbody>
{res.map((resource)=>{return <tr><td id="title">{resource.course}</td><td>{resource.title}</td><td>{resource.desc}</td><td><button onClick={async()=>{

   axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
   await axios.post("http://localhost:3000/DelRes",{
 
     id:resource._id, // sanitize
   
   }).then((response)=>{
     fetchRes();
   }).catch(error=>alert(error))
 
}} className="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
  Delete
</button></td></tr>})}
  </tbody>
</table>
<label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Course</label>
<select name="courses" onChange={(e)=>setCourse(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

  <option selected>Select Course</option>
  {courses.map((course)=>{return  <option value={course.title}>{course.title}</option>})}
</select> 

  
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
       
          <form className="form-horizontal" 
                onSubmit={(event) => handleSubmit(event)}
               >
 
<div className="form-group">        
  
    </div>
    <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Resource Title</label>
        <div className="mt-2">
          <input name="title"type="text" onChange={handleTitle} value={Data.title}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
     
      <div>
        <label for="description"   className="block text-sm font-medium leading-6 text-gray-900">Rsource description</label>
        <div className="mt-2">
          <input name="desc" onChange={handleDesc} value={Data.desc} type="text"   required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
     
     
      <div>
        <label for="price"   className="block text-sm font-medium leading-6 text-gray-900">Upload Resource</label>
        <h1>Upload to server</h1>
    
      <hr></hr>
        <div className="mt-2">
          <input name="imgUrl" onChange={handleFileChange}  type="file"    required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <center> <button type="submit" className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Save</h2></button></center>
   
</form>
        </div>
      </div>
     
    <br></br>

    </div>
    
    
  );
}

export default ResUpload;
