import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
const toggleMode = ()=>{
if(mode==='light'){ setMode('dark');  
document.body.style.backgroundColor='#042743';
showAlert("Dark mode enabled","success");
// document.title="TextUtils-DarkMode"
 //if we want title to change
}
else{ setMode('light');
document.body.style.backgroundColor='white';
showAlert("Light mode enabled","success");}
}

const[color,setColor]=useState(' ');
const toggleColor = ()=>{
if(color==='text-light'){ setColor(' ');  }
else{ setColor('text-light');}
}

const[text,setText]=useState('Dark Mode');
const textC=()=>{
 if(text==='Dark Mode'){setText('Light Mode')}
 else{setText('Dark Mode')}
};

const allFunc=()=>{
  toggleMode();
  toggleColor();
  textC();
}


const [alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type,
  })
  setTimeout(()=>{
setAlert(null);
  } ,3000  )
}

  return (
   
    <>
    <Router>  

      <Navbar title="TextUtils" mode={mode} color={color} text={text}  allFunc={allFunc}/>

<Alert alert={alert} />

<div className="conatainer">

<Routes>
          {/* <Route path="/about">
            <About />
          </Route>
 
          <Route path="/">
          <TextForm showAlert = {showAlert} mode={mode} heading="Enter text below to analyze"/>
          </Route> */}


          <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert = {showAlert} mode={mode} heading="Enter text below to analyze"/>} />
        {/* <Route exact path="/path3" element={<component3 />} /> */}


        </Routes>


{/* <About/>  */}
</div>


</Router>


</>
      
  );
}

export default App;
/*
//router
https://v5.reactrouter.com/web/guides/quick-start

*/