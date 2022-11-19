
import React from "react";
import Navbar from "./components/navbar/Navbar";
import './app.css'
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
      </div>
        
    </div>
  );
}

export default App;