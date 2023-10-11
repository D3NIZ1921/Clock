import React, { useState } from "react";

let time = new Date().toLocaleTimeString();

function App() {
  const [tme, setTme] = useState(time);

  function currentTime() {
    setTme(new Date().toLocaleTimeString());
  }

  setInterval(currentTime, 1000);

  return (
    <div className="container">
      <h1>{tme}</h1>
    </div>
  );
}

export default App;
