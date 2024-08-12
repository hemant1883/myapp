import React, { useState } from 'react'

export default function Form(props) {
    const UpperCaseConversion = () => {
        console.log("convert to upper case" + text)
        const newText = text.toUpperCase();
        settext(newText)

    }
    const LowerCaseConversion = () => {
        console.log("convert to upper case" + text)
        const newText = text.toLowerCase();
        settext(newText)

    }

    const onChange = (event) => {
        console.log("onchange")
        settext(event.target.value)
    }

    const clearText = () => {
        settext("");
    }

    const [text, settext] = useState('');
    return (

        <>

            <div className="container">
                <h3 className={`my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h3>
                <div className="mb-3">

                    <textarea className={`form-control bg-${props.mode === 'dark' ? 'secondary' : 'light'}  text-${props.mode === 'dark' ? 'light' : 'dark'}`} value={text} id="myBox" rows="8" onChange={onChange} ></textarea>

                    <button type="button" className="btn btn-primary mt-2 mx-1" onClick={UpperCaseConversion}>Convert To Upper Case</button>
                    <button type="button" className="btn btn-primary mt-2 mx-1" onClick={LowerCaseConversion}>Convert To Upper Case</button>
                    <button type="button" className="btn btn-primary mt-2 mx-1" onClick={clearText}>Clear</button>

                </div>

            </div>
            <div className="container">
    <h2 className={`mt-5 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Your Text Summary</h2>
    <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text.trim().split(" ").filter(word => word.length > 0).length} words and {text.trim().length} characters</p>
    <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{0.008 * text.trim().split(" ").filter(word => word.length > 0).length} mins to read</p>

    <h3 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Preview</h3>
    <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}> {text.length > 0 ? text : "enter something to preview here"}</p>
</div>


        </>
    )
}
