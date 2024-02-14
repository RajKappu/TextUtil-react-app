import React,{ useState } from 'react';

export default function TextArea(props) {
    const clickUpHandler = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success','converted to uppercase');
    }

    const clickLoHandler = ()=>{
       let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success','converted to lowercase');
    }

    const clickCopyHandler = ()=>{
      var copytext = document.getElementById("textBox");
      copytext.select();
      navigator.clipboard.writeText(copytext.value);
      props.showAlert('success','text copied');
    }

    const clickClearHandler = ()=>{
      let ctext = '';
      setText(ctext);
      props.showAlert('success','text cleared!');
    }

    const handlerOnChange = (event)=>{
      setText(event.target.value); 
    }

    const [text,setText] = useState('');
  return (
    <div>
      
      <div className="container" style = {{color: props.mode === 'light'?'black':'white'}}>           
        <h1>{props.heading}</h1>
        <div className = "mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'black',color: props.mode === 'light'?'black':'white'}} value={text} id="textBox" rows="8" onChange={handlerOnChange}></textarea>
        </div>
        <button className = "btn btn-primary mx-1" onClick = {clickUpHandler}>Convert uppercase</button>
        <button className = "btn btn-primary mx-1" onClick = {clickLoHandler}>Convert lowercase</button>
        <button className="btn btn-primary mx-1" onClick = {clickCopyHandler}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick = {clickClearHandler}>Clear text</button>
      </div>

      <div className = "container my-2" style = {{color: props.mode === 'light'?'black':'white'}}>
        <h2>Your text summery</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div> 
    </div>   
  );
}