import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked")
        //setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to uppercase","success");
    }
    const handleOnChange=(event)=>{
        //console.log("On Change")
        setText(event.target.value)
    }

    const handleDownClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText) ;
        props.showAlert("Text has been converted to lowercase","success");
    }

    const handleClearClick= ()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text is now been cleared","success");
    }

    return (
        <>
        <div className="container">
        <h2 style={{color:props.mode === 'dark'?'white':'black'}}>{props.heading}</h2>
        <div className="my-3">
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="10" style={{backgroundColor:props.mode === 'dark'?'#a76bcf':'white',color:props.mode === 'dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>CLear the Text</button>
         </div>
        <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>Summary</h2>
            <p>{text.split(" ").length-1} words {text.length} characters</p>
            <p>{0.008 * (text.split(" ").length-1)} Average reading time</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
