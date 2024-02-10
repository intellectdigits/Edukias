
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import CustomerPage from './pages/CustomerPage';
import ClientDash from "./pages/ClientDash";
import CourseDetails from "./pages/courseDetails";
import Cart from "./pages/Cart";
import Learning from "./pages/Learning";
import ResoursePage from "./pages/ResourcePage";
import SchedularPage from "./pages/SchedularPage";
import ClientRes from "./pages/ClientRes";


export default function App() {
  return (
<>
    
    <BrowserRouter>
   
    <Routes>
 
      <Route path="/" exact element={<Home/>}/>
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/client" exact element={<ClientDash/>}/>
      <Route path="/admin" exact element={<CustomerPage/>}/>
      <Route path="/course/:id" exact element={<CourseDetails/>}/>
      <Route path="/cart" exact element={<Cart/>}/>
      <Route path="/learning" exact element={<Learning/>}/>
      <Route path="/res" exact element={<ResoursePage/>}/>
      <Route path="/classes" exact element={<SchedularPage/>}/>
      <Route path="/myres/:course" exact element={<ClientRes/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}


