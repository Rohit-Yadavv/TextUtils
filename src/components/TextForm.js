import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, settext] = useState("")

    const HandleTextChange = (event) => {
        settext(event.target.value)
    }
    const uppercase = () => {
        let uppertext = text.toUpperCase()
        settext(uppertext)
    }
    const lowercase = () => {
        let lowertext = text.toLowerCase()
        settext(lowertext)
    }
    const clear = () => {
        settext("")
    }


    return (
        <>
            <div className="mb-3 container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2 className="mt-5 mb-2 text-center">{props.heading}</h2>
                <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "light" ? "white" : "grey", color: props.mode === "light" ? "black" : "white" }} onChange={HandleTextChange} id="mybox" rows="10"></textarea>
                <div className="container border p-1 m-1">
                    <p>
                        <strong>CHARACTERS:</strong> {text.length} &nbsp;&nbsp;&nbsp; <strong>WORDS: </strong>{text.split(" ").filter((element)=>{return element}).length}
                    </p>
                    <p>{0.008 *  text.split(" ").filter((element)=>{return element}).length} <i> Minutes To Read</i></p>
                </div>
                <button type="button" className="btn border border-light btn-primary m-2" onClick={uppercase}>CONVERT TO UPPERCASE</button>
                <button type="button" className="btn border border-light btn-primary m-2" onClick={lowercase}>CONVERT TO LOWERCASE</button>
                <button type="button" className="btn border border-light btn-primary m-2" onClick={clear}>CLEAR TEXT</button>
            </div>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h4>Preview</h4>
                <div className="preview">
                    <p>{text.length > 0 ? text : "Enter Something To Preview"}</p>
                </div>
            </div>

        </>
    )
}
