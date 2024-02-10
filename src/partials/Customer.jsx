import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";


import axios from "axios";
function Customer() {
 // const navigate = useNavigate();
const[courses,setCourses]=useState([]);
const[loading,setLoading]=useState(false);
const history = useNavigate();
const[Data,setData]=useState({title:"",category:"",instructor:"",desc:"",ratings:"",imgUrl:"",price:""})
const [image, setImage] = useState({ preview: '', data: '' })
const [status, setStatus] = useState('')
const[cos,setCourse]=useState();
const handleTitle=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})


}
const handlectegory=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})


}
const handleInstructor=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})


}
const handleDesc=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})


}
const handleRatings=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})


}
const handlePrice=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})


}
const handleimgUrl=(e)=>{
  const value=e.target.value;
const name =e.target.name;
setData({...Data,[name]:value})


}
async function fetchCourses(){

  axios.defaults.headers.post['Content-Type'] ='multipart/form-data';
  await axios.get("http://localhost:3000/AllCourses").then((response)=>{
  
    setCourses(response.data);
  
  }).catch(error=>alert(error))
  
  }
  useEffect(() => {
   
   fetchCourses();
    
  },[]);
  const  handleSubmit=async (e)=>{
    e.preventDefault();
    let formData = new FormData()
    formData.append('file', image.data)
    formData.append('title', Data.title)
    formData.append('category', cos)
    formData.append('desc', Data.desc)
    formData.append('ratings', Data.ratings)
    formData.append('price', Data.price)
    formData.append('imgUrl', Data.imgUrl)
    await axios.post("http://localhost:3000/addCourse",formData,{headers: {'Content-Type': 'multipart/form-data'}}).then((response)=>{
      fetchCourses();
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
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">All Courses</h2>
        <table className="table-auto w-full">
   <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
   <tr>
   <th className="p-2 whitespace-nowrap">Course Title</th>
   <th className="p-2 whitespace-nowrap">Course Category</th>
   <th className="p-2 whitespace-nowrap">Course Description</th>
  
   <th className="p-2 whitespace-nowrap">Course Instructor</th>
   <th className="p-2 whitespace-nowrap">Course Price</th>
   <th className="p-2 whitespace-nowrap">Course Image</th>
   <th className="p-2 whitespace-nowrap">Actions</th>
    </tr>
  </thead>
 
  <tbody>
{courses.map((course)=>{return <tr><td id="title">{course.title}</td><td>{course.category}</td><td>{course.desc}</td><td>{course.price}</td><td>{course.price}</td><td><img width={60} src={"http://localhost:3000/"+course.imgUrl+".jpg"}/></td><td><button onClick={async()=>{

   axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
   await axios.post("http://localhost:3000/DelCourse",{
 
     id:course._id, // sanitize
   
   }).then((response)=>{
     fetchCourses();
   }).catch(error=>alert(error))
 
}} className="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
  Delete
</button></td></tr>})}
  </tbody>
</table>
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
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">title</label>
        <div class="mt-2">
          <input name="title"type="text" onChange={handleTitle} value={Data.title}  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="category"   class="block text-sm font-medium leading-6 text-gray-900">category</label>
        <div class="mt-2">
        <select name="courses" onChange={(e)=>setCourse(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

<option selected>Select Category</option>
<option value="Software Development">Software Development</option>
<option value="Business">Business</option>
<option value="Accounting">Accounting</option>
<option value="Design">Design</option>
<option value="PhotoGraphy">PhotoGraphy</option>
<option value="PhotoGraphy">Physics</option>
<option value="Mathematics">Mathematics</option>
</select> 
        </div>
      </div>
      <div>
        <label for="instructor"   class="block text-sm font-medium leading-6 text-gray-900">Instructor</label>
        <div class="mt-2">
          <input name="instructor" onChange={handleInstructor} value={Data.instructor} type="text"   required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="description"   class="block text-sm font-medium leading-6 text-gray-900">description</label>
        <div class="mt-2">
          <input name="desc" onChange={handleDesc} value={Data.desc} type="text"   required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="Ratings"   class="block text-sm font-medium leading-6 text-gray-900">Ratings</label>
        <div class="mt-2">
          <input name="ratings" onChange={handleRatings} value={Data.ratings} type="text"   required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="price"   class="block text-sm font-medium leading-6 text-gray-900">Price</label>
        <div class="mt-2">
          <input name="price" onChange={handlePrice} value={Data.price} type="number"   required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="price"   class="block text-sm font-medium leading-6 text-gray-900">Banner</label>
        <h1>Upload to server</h1>
      {image.preview && <img src={image.preview} width='100' height='100' />}
      <hr></hr>
        <div class="mt-2">
          <input name="imgUrl" onChange={handleFileChange}  type="file"    required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <center> <button type="submit" class="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Save</h2></button></center>
   
</form>
        </div>
      </div>
     
    <br></br>

    </div>
    
    
  );
}

export default Customer;
