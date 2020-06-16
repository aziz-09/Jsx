import React from 'react';
import logo from './logo.svg';
import './App.css';
import myImage from "./srcimg.png"
import  Mohamed from "./component/test"



function App() {
  return (
    <div className="App"> 
  
       <div className = "center" >
    	<h1 className="title"> 
      <p> Aziz </p> 
      </h1>  
      </div>
      <br /> 
  
    <img className="editimg" src={myImage}/>  <br />
  	<img src={"/publicImg.png"}/>  
 
   
 
    <video className ="edit"  width="320" height="240" controls>  
 
     <source src="myVideo.mp4" type="video/mp4"/> 
 
    </video> 
 
    </div>
    
  );
}

export default App;
