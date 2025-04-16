import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Successfully converted to Uppercase!!!","success");
    }
    const handleOndownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Successfully converted to Lowercase!!!","success");
    }

    const handleClearnClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Successfully Cleared the textarea!!!","success");
    }

    const handleSentenceCaseClick = () => {
        let newText = text.split(/([.?!]\s*)/);
        // let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1).toLowerCase();

        }
        setText(newText.join(""));
        props.showAlert("Successfully converted to Sentence Case!!!","success");
    }
    const handleTitleCaseClick = (txt) => {
        // let newText = text.charAt(0).toUpperCase() + text.slice(1, text.length).toLowerCase();
        let newText = txt.split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1).toLowerCase();
        }
        setText(newText.join(" "));
        props.showAlert("Successfully converted to Title Case!!!","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myForm" rows="3" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>

                    </textarea>
                </div>
                <div className="container">
                    <button type="button" className="btn btn-primary mx-1" onClick={handleOnUpClick}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-primary" onClick={handleOndownClick}>Convert to Lowecase</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={handleSentenceCaseClick}>Convert to Sentence case</button>
                    <button type="button" className="btn btn-primary" onClick={() => handleTitleCaseClick(text)}>Convert to Title case</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={handleClearnClick}>Clear text</button>
                </div>
            </div>
            <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your Text summary</h1>

                <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).filter(word => word.length).length} <b>words</b> {text.length} <b>characters</b></p>
                <p>{(0.008 * (text.trim() === '' ? 0 : text.trim().split(/\s+/).filter(word => word.length).length))} Minutes needed to read (<b>Average</b>).</p>
                <h2>Text Preview</h2>
                <p>{text.length>0 ? text:"Enter something in the textarea to preview"}</p>
            </div>
        </>
    )
}

