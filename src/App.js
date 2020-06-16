import React from 'react';
import logo from './logo.svg';
import './App.css';
import myImage from "./srcimg.png"

function App() {
  return (
    <div className="App"> 
  
    <div style={{
      border:'solid 1px black',
      maxWidth:"100vw"
    }}>  
    
       
       <div>
    	<h1 className="title red">  
      <p> Your name here </p> 
      </h1>  
      </div>
 
        
    <img src={myImage}/> 
 
  	<img src={"/publicImg.png"}/>  
 
   
 
    <video width="320" height="240" controls>  
 
        <source src="myVideo.mp4" type="video/mp4"/> 
 
    </video> 
 
    </div>
    </div>
  );
}

export default App;
