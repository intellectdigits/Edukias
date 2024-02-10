
import {Link} from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const cookies = new Cookies();
const Header = () => {
    const [navOpen,setNavOpen]=useState(true); 
    const [searchOpen,setSearchOpen]=useState(false); 
    const [searchTerm,setSearchTerm]=useState(); 
    const [searchResult,setSearchResult]=useState(); 
    const [catOpen,setCatOpen]=useState(false);
     const navigate = useNavigate();
    const logout =()=>{
        cookies.remove("TOKEN", { path: "/" }); 
        navigate("/login")
    }
    async function fetchCourse(){

        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        await axios.get(`https://edukiaapi.onrender.com/search/${searchTerm}`).then((response)=>{
       
          setSearchResult(response.data);
         setSearchOpen(true)
       
          console.log("cate",response.data) 
       
        }).catch(error=>console.log(error))
        
        }
    const handleChange=(e)=>{
        setSearchTerm(e.target.value);
        fetchCourse();
    }
           
                
    return (
    <div className=" flex justify-between sticky t0p-0 mt-3 shadow-md bg-regal-blue text-white-600"> 
   {!navOpen&& <div className="sm:hidden absolute md:absolute top-0 w-1/2 px-5 justify-between h-screen bg-white">
    <div className="flex flex-row-reverse "><p className="text-lg font-normal text-dark my-3" onClick={()=>setNavOpen(!navOpen)}><div >X</div></p> </div>
    <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/">movies</Link></p> </div>
    <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/">Teachers</Link></p> </div>
    <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/">Categories</Link></p> </div>
    <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/signup"> Sign Up </Link></p> </div>
    <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/login"> Login </Link></p> </div>
    </div>}
    {navOpen&&<div className="sm:hidden flex  "><img src="assets/img/list.png" width={45} className="text-2xl font-mono text-white my-3" onClick={()=>setNavOpen(!navOpen)}/> </div>}
    <div className="hidden md:flex mx-10 "><p className="text-2xl font-mono text-white my-3"><Link to="/">Edukia</Link></p> </div>
   
    <div className="hidden md:flex flex-col mx-10 "> <input onBlur={()=>setSearchOpen(!searchOpen)} className="shadow appearance-none sp-40 mt-3 border h-10 rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
   onChange={handleChange} value={searchTerm}  id="username" type="text" placeholder="Search Course"/>
    {searchOpen&&<div className=" absolute top-[55px] z-20  flex flex-col w-1/5  bg-white text-dark rounded-sm">
  {searchResult.map((result)=>{return <div className="flex my-3 cursor-pointer border-solid"><img width={50} src={"http://localhost:3000/"+result.imgUrl+".jpg"}  alt="" />  <p className="text-2xl mx-5">{result.title}</p></div>})}

</div>}

    </div>
    <div className="hidden md:flex mx-1 z-10 " onClick={()=>setCatOpen(!catOpen)}><p className="text-lg font-normal text-white my-3"><Link to="/">Categories</Link></p>
    {catOpen&&<div className=" absolute top-[50px] z-20  flex flex-col w-1/5  bg-white text-dark rounded-sm ">
    <div className="flex my-3 cursor-pointer border-solid"><img width={30} src="assets/img/Search-icon.png"  alt="" />  <p className="text-1xl mx-5 cursor-pointer">Development</p></div>
    <div className="flex my-3 cursor-pointer border-solid"><img width={30} src="assets/img/Search-icon.png"  alt="" />  <p className="text-1xl mx-5 cursor-pointer">Busines</p></div>
    <div className="flex my-3 cursor-pointer border-solid"><img width={30} src="assets/img/Search-icon.png"  alt="" />  <p className="text-1xl mx-5">Mathematics</p></div>
    <div className="flex my-3 cursor-pointer border-solid"><img width={30} src="assets/img/Search-icon.png"  alt="" />  <p className="text-1xl mx-5">Design</p></div>
    <div className="flex my-3 cursor-pointer border-solid"><img width={30} src="assets/img/Search-icon.png"  alt="" />  <p className="text-1xl mx-5">Photography</p></div>
    <div className="flex my-3 cursor-pointer border-solid"><img width={30} src="assets/img/Search-icon.png"  alt="" />  <p className="text-1xl mx-5">Health & Fitness</p></div>
   
    </div>
 }
     </div>
   
    <div className="hidden md:flex mx-1 "><p className="text-lg font-normal text-white my-3"><Link to="/admin">Admin</Link></p> </div>
    <div className="hidden md:flex mx-1 "><p className="text-lg font-normal text-white "><Link to="/"><img src="assets/img/fav.png" width={35} className="text-2xl font-mono text-white my-3" /></Link></p> </div>
    
    <div className="hidden md:flex gap-3 mx-10">
    <ul className="flex gap-5 text-lg text-white my-3"><li><Link to="/login"> Login </Link></li><li><Link to="/signup"> Sign Up </Link></li></ul>
</div>
    </div>
    
    )
}
export default Header;
