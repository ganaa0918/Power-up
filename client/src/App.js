
import React from "react";
import Navbar from "./components/navbar/Navbar";
import './app.css'
import img1 from './components/navbar/images/logo1.png'
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <div className="header">
      <Navbar  />  
        <div class="text-center text-white mt-5">
           <img src={img1} height="300px"/>
           <h1 class=" text-lg-white " style={{fontSize:"40px"}}>FITNESS CLUB</h1>
        </div>
      </div>
        
    </div>
  );
}

export default App;