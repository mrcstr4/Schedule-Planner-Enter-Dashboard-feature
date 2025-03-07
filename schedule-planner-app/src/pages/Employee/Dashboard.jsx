import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/a2klogo.png";
import logoApp from "../../assets/logo.png";




const HomePage = () => {
   

  return (
     
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">

      
      <img src={logo} alt="A2K Logo" className="absolute top-6 left-8 w-32" />
       Dashboard here
    </div>

  );
};



export default HomePage;