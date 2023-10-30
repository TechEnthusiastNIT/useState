import { useState } from "react";
import "./styles.css";

export default function App() {
  const [advice, setAdvice]= useState("");
  async function apiAdvice(){
    const apis= await fetch("	https://api.adviceslip.com/advice")
    const resi = await apis.json();
    setAdvice(resi.slip.advice);
    
    
 }
  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={apiAdvice}>get advice</button>
    </div>
  );
}
