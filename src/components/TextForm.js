import React, { useState } from 'react'



export default function TextForm(props) {

    const handleUpClick=()=>{
//console.log("uppercase was clicked");
//setText("you have clicked on handleUpClick");
let newText = text.toUpperCase();
setText(newText)
    }

    const handleLoClick=()=>{
       // console.log("Lowercase was clicked");
        //setText("you have clicked on handleUpClick");
        let newText = text.toLowerCase();
        setText(newText)
            }

            const handleClear=()=>{
                //console.log("onChange");
                    setText("");
                    }

    const handleOnChange=(event)=>{
//console.log("onChange");
    setText(event.target.value);
    }

    const handleCopy = ()=>{
        console.log("i am copy");
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }



    //const[count,setCount]=useState(0);
const[text,setText]=useState('Enter text here2')
    
// text = "wrong way" // wrong way to change state
// setText = "correct way"

  return (
    <>
    <div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>  
    {/* {console.log(props.mode)} */}
  <h1 className='my-3'>{props.heading}</h1> 
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'grey'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick ={handleUpClick}>To_Uppercase</button>
<button className="btn btn-primary mx-1" onClick ={handleLoClick}>To_Lowercase</button>
<button className="btn btn-primary mx-1" onClick ={handleClear}>To_Clear</button>
<button className="btn btn-primary mx-1" onClick ={handleCopy}>To_Copy</button>
    </div>

<div className="container my-3" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
    <h2>your text summary</h2>

    <p>{text.length} characters and {text.split(" ").length}</p>
    <p>{0.008 *  text.split(" ").length}  Minutes Read</p>

<h2>Preview</h2>
<p>{text}</p>
<hr />
</div>
</div>





    </>
  )
}


/*navigator.clipboard.writeText() is a method available in the browser's JavaScript API that allows writing text to the system clipboard buffer. This method accepts a string as a parameter and simply copies that string to the clipboard. It was introduced in 2018 and is supported by most modern browsers. It provides an easy and efficient way to provide a copy-to-clipboard feature in web applications.*/