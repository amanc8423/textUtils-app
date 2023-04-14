import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  const[mode,setMode]=useState('light');
const toggleMode = ()=>{
if(mode==='light'){ setMode('dark');  
document.body.style.backgroundColor='#042743';}
else{ setMode('light');
document.body.style.backgroundColor='white';}
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

  return (
   
    <>

      <Navbar title="TextUtils" mode={mode} color={color} text={text}  allFunc={allFunc}/>

<TextForm mode={mode} heading="Enter text below to analyze"/>

<About/> 
</>
      
  );
}

export default App;
