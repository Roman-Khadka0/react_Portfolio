import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Dashboard() {
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
    <div className=''
    style={{ backgroundColor: BackgroundColor }}
    >
      <button
          onClick={fontChange}
          className="outline-none text-white px-4 py-1 rounded-full shadow-lg mt-5 flex flex-center"
          style={{ backgroundColor:'grey' }}
    >
      <i className="fas fa-moon mr-2"></i> 
      Dark
    </button>
    <div className="text-2xl text-left text-gray-800 bg-white p-6 rounded-lg shadow-2xl shadow-slate-500 max-w-xl mx-auto"
        style={{ backgroundColor: BackgroundColor }}    

    >
      <h1 className='mb-4 text-center'
      style={{ color: fontColor }}
      ><b>About me</b></h1>
    <p className=" mb-4"
    style={{ color: fontColor }}
    >
      I am Roman Khadka, living in Boudha, Kathmandu.
    </p>
    <p className="leading-relaxed mb-4"
    style={{ color: fontColor }}
    >
      I completed my schooling at <span className="font-medium">East-Pole Higher Secondary School</span> and went to <span className="font-medium">Xavier International College</span> for high school. Currently, I am a bachelor's student at <span className="font-medium">Herald College, Kathmandu</span>, and I am pursuing my career as a software developer and web developer.
    </p>
    <p className="leading-relaxed"
    style={{ color: fontColor }}  
    >
      With a background in computer studies, I am focused on building my skills and knowledge to excel in the tech industry.
    </p>
    </div>


    <div className="flex justify-center gap-52 h-auto mt-5">
  
        <div className="text-2xl text-gray-800 bg-white p-6 rounded-lg shadow-lg max-w-lg"
            style={{ backgroundColor: BackgroundColor }}

        >
          <h1 className="mb-4 text-center text-3xl font-bold"
          style={{ color: fontColor }}
          >Project 1</h1>
            <h2 className="text-center"
            style={{ color: fontColor }}
            >TicTacToe</h2>

                <img      
                   src="https://cdn-icons-png.flaticon.com/512/10199/10199746.png"  
                   alt="Project Thumbnail"
                  className="w-full h-56 object-cover rounded-lg mb-6 shadow-md"
                />

    <div className="flex justify-center gap-4 mt-4"
    
    >
      <a
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        style={{ color: fontColor }}
        >
        View Project
      </a>
      <a 
        href="https://github.com/Roman-khadka/tic-tac-toe/tree/main/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
        style={{ color: fontColor }}
        >
        Github
      </a>
    </div>
  </div>

  
  <div className="text-2xl text-gray-800 bg-white p-6 rounded-lg shadow-lg max-w-lg"
      style={{ backgroundColor: BackgroundColor }}

  >
    <h1 className="mb-4 text-center text-3xl font-bold"
    style={{ color: fontColor }}
    >Project 2</h1>
    <h2 className="text-center"
    style={{ color: fontColor }}
    >Caesar Cipher</h2>

    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUJv9y4WEjQ0598jW-FQeprwwhHXBYyQhUw&s"  
      alt="Project Thumbnail"
      className="w-full h-56 object-cover rounded-lg mb-6 shadow-md"
    />

    <div className="flex justify-center gap-4 mt-4">
      <a
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
        View Project
      </a>
      <a 
        href="https://github.com/Roman-khadka/Ceaser_cyper"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg">
        Github
      </a>
    

    </div>
  </div>
</div>
</div>
  )
}

export default Dashboard