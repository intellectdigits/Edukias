import { useEffect } from "react";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const AuthHeader = ({cartCount,NotifyCount}) => {

    const logout =()=>{
        cookies.remove("TOKEN", { path: "/" }); 
        window.location.href="/login"
    }
    return (
        <>
    <div className="flex justify-between sticky t0p-0 mt-3 shadow-md bg-regal-white text-white-600"> 
    <div className="flex mx-10 "><p className="text-2xl font-mono text-dark my-3"><Link to="/client">Edukia</Link></p> </div>
    <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/client">movies</Link></p> </div>
    <div className="flex mx-10 "> <input className="shadow appearance-none sp-40 mt-3 border h-10 rounded-full w-full  space-x-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Course"/></div>
     <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/client">Teachers</Link></p> </div>
    <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/learning">My Learning</Link></p> </div>

    <div className="flex gap-3 mx-10">
    <ul className="flex gap-5 text-lg text-dark my-3"><li><Link to="/cart"><div className="relative h-10 w-10 py-0">
    <img src="../assets/img/notification.png" className="w-3/2 h-10" alt="" />
  <div className="absolute top-0 left-0 items-center  w-1/2 text-sm text-bold bg-blue-600 rounded-full  text-white border-collapse "><p className="text-center ...">3</p></div>
</div> </Link></li>
<li><Link to="/cart"><div className="relative h-10 w-10 py-0">
    <img src="../assets/img/cart.png" className="w-full" alt="" />
  <div className="absolute top-0 left-0 items-center  w-1/2 text-sm text-bold bg-blue-600 rounded-full  text-white border-collapse "><p className="text-center ...">{cartCount>0&&cartCount}</p></div>
</div> </Link></li>
<li><Link to="/" onClick={()=>logout()}>logout</Link></li></ul>
</div>
    </div>
    <div className="md:hidden sm:flex flex-col items-end sticky t0p-0 mt-3 shadow-md text-dark"> 
    ghjghjghj
    </div>
    <div className="hidden md:flex justify-around items-end sticky t0p-0 mt-3 shadow-md text-dark"> 
    <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/client">Business</Link></p> </div>
    <div className="flex mx-1 "><p className="text-lg font-normaltext-dark my-3"><Link to="/client">Design</Link></p> </div>
     <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/client">Business</Link></p> </div>
    <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/client">Design</Link></p> </div>
    <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/client">Business</Link></p> </div>
    <div className="flex mx-1 "><p className="text-lg font-normal text-dark my-3"><Link to="/client">Design</Link></p> </div>
    <div className="flex gap-3 mx-10">
 
</div>
    </div>
    </>
    )
}
export default AuthHeader;