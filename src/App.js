import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import TextArea from './Components/TextArea.js';
import Alert from './Components/Alert.js';

function App() {

  const[mode,setMode] = useState("light");
  const[alert,setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("Dark");
      document.body.style.backgroundColor = "black";
      showAlert('success','darkmode enabled');
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('success','light mode disabled');
    }
  }

  const showAlert = (type,message)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  return (
    <>
      <Navbar tittle = "TextUtil" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container">
        <TextArea heading = "Enter the text below to analyze" showAlert = {showAlert} mode = {mode}/>
      </div>
    </>
      
  );
}

export default App;