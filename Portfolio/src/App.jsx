import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [background, setBackground] = useState("url('https://img.freepik.com/free-vector/line-background-wave-gradient-template-design_483537-5084.jpg?t=st=1729675052~exp=1729678652~hmac=35751b15788a7c622ba1d1d87b21f5073a8f1f248b073f9dcc676f7d8178cc60&w=996')");

  return (
    <div
      className="w-full h-screen duration-200 bg-cover bg-center flex justify-end items-start px-8 pt-5"
      style={{ backgroundImage: background }}
    >
      <button
        onClick={() => setBackground("url('https://img.freepik.com/free-vector/black-green-geometric-background-vector-design_677411-3105.jpg?t=st=1729674927~exp=1729678527~hmac=94abfbc7648224087e7d2c5e6a0a5d2f74710eeeac5a391f8a3e282cd998d158&w=1380')")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{ backgroundColor: "white" }}
      >
        <i className="fas fa-moon mr-2"></i>
        Dark
      </button>
      <button
        onClick={() => setBackground("url('https://img.freepik.com/free-vector/line-background-wave-gradient-template-design_483537-5084.jpg?t=st=1729675052~exp=1729678652~hmac=35751b15788a7c622ba1d1d87b21f5073a8f1f248b073f9dcc676f7d8178cc60&w=996')")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "black" }}
      >
        <i className="fas fa-sun mr-2"></i> 
        Light
      </button>
    </div>
  );
}

export default App;
