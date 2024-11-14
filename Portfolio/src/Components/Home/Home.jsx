import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
        const [BackgroundColor, setBackgroundColor] = useState("white");
        const [fontColor, setfontColor] = useState("black");

        const fontChange = ()=>{
          if(BackgroundColor=== "white"){
            setBackgroundColor("black");
            setfontColor("white")
          }
          else{
            setBackgroundColor("white");
            setfontColor("black")
          }
        }



  return (
    <>
    
    <div
          className="w-full h-screen duration-200 bg-cover bg-center flex justify-end items-start px-8 pt-5"
           style={{ backgroundColor: BackgroundColor }}
  >
     <div className="flex justify-center items-center h-screen ml-40"> {/* Adjusted to ml-40 for more space */}
  <img 
    src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/457094261_1051054113036833_1337046102438187402_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1q8bMCr8b98Q7kNvgG5l-Qx&_nc_zt=23&_nc_ht=scontent.fjkr2-1.fna&_nc_gid=AZ_Ka_Jcfyy7pyHQbWf5n4E&oh=00_AYAPAhqJ4rGLd58AjV-B9njQy185CEqWyNsB62iMJs5rNA&oe=672C22F0"
    alt="profile"
    className="w-[64rem] h-[48rem] rounded-full border-4 border-gray-300 shadow-lg object-cover ml-11"
  />
</div>

<div className="relative h-screen">
  <div className="absolute left-40 top-1/2 transform -translate-y-1/2 flex flex-col items-center"> {/* Adjust left value as needed */}
    <h3 className="text-2xl mb-0 text-gray-700">
      <b>hello I'm</b> 
    </h3>
    <h1 className="text-5xl whitespace-nowrap" style={{ color: fontColor }}>
      <b>Roman Khadka</b> 
    </h1>
    <h3 className="text-3xl mb-5 text-red-900">
      <b>Web Developer</b>
    </h3>
    <div className='gap-5 mt-4'>
    <a
    href='https://github.com/Roman-Khadka0'
    target="_blank"
    className="hover:bg-red-900 outline-none text-black px-3 py-3 rounded-2xl text-2xl"
        style={{ color: fontColor }}><b>Github <i className="fab fa-github mr-2"></i>
</b>
    </a>

    <Link
    to="/contact"
    className="hover:bg-red-900 outline-none text-black px-3 py-3 rounded-2xl text-2xl"
        style={{ color: fontColor }}
        ><b>Contact me</b> 
    </Link>
    </div>
  </div>
  
</div>



    <nav
        className="w-full flex justify-end space-x-20 px-24 py-4 text-2xl font-poppins"
        style={{ color: fontColor }}
    >
        <Link to="/" className="hover:bg-red-900 hover:font-bold outline-none text-black px-3 py-3 rounded-2xl"
        style={{ color: fontColor }}>Home</Link>
        <Link to="/about" className="hover:bg-red-900 hover:font-bold outline-none text-black px-2 py-3 rounded-2xl "
        style={{ color: fontColor }}>About</Link>
        <Link to="/contact" className="hover:bg-red-900 hover:font-bold outline-none whitespace-nowrap text-black px-2 py-3 rounded-2xl"
        style={{ color: fontColor }}>Contact Me</Link>
    </nav>

    <button
          onClick={fontChange}
          className="outline-none text-white px-4 py-1 rounded-full shadow-lg mt-5"
          style={{ backgroundColor:'grey' }}
    >
      <i className="fas fa-moon mr-2"></i> 
      Dark
    </button>
  </div>
  
</>
  )
}

export default Home