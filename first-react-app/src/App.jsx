import React from "react";
import ClickButton from "./ClickButton";
import Hello from "./Hello";
import Navbar from "./components/Navbar";
import Button from "./components/Button";


function App() {
  return (
    <div>
      <Navbar />
      <Button></Button>
      <h1>Saurabh Kumar Singh</h1>
      <ClickButton></ClickButton>
      <Hello></Hello>


    </div>
  )
}

export default App;