
import './App.css';

import Navbar from './components/Navbar';
import Form from './components/Form';

// import About from './components/About';
import { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

const[mode,setmode]=useState('light')
 const tooglemode=()=>{
if(mode==='dark'){
  setmode("light")
  document.body.style.backgroundColor="white"
setInterval(() => {
  document.title='Text Manager - home'
}, 2000);
setInterval(() => {
  document.title='Text Manager - download now'
}, 1500);


}
else{
  setmode("dark")
   document.body.style.backgroundColor="#6610f2"

   setInterval(() => {
    document.title='Text Manager - home'
  }, 2000);
  setInterval(() => {
    document.title='Text Manager - download now'
  }, 1500);
  
}
 }

  return (
  <>
{/* <Router> */}
<Navbar  aboutText="about" title="Text Manager" mode={mode} tooglemode={tooglemode}/>

<div className="container">
{/* <Routes> */}
{/* <Route path="/about" element={<About mode={mode} />} /> */}
         
{/* <Route path="/" element={<Form mode={mode} heading="Text Manager" />} /> */}
          <Form/>
        {/* </Routes> */}



</div>
{/* </Router> */}
</>
  );
}

export default App;
