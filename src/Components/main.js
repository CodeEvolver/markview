import React, {useState} from 'react';
import {marked} from 'marked';
//let marked = require("marked");

function Main() {
    const [mode, setMode] = useState('preview');
    const [markdown, setMarkdown] = useState("");
    const edit = () => {
        setMode('edit');
    }
    const preview = () => {
        setMode('preview');
    }
    const updateMarkdown = (modifiedMarkdown) => {
        setMarkdown(modifiedMarkdown);
    }
    var style = {
        backgroundColor: "#EAEEED",
        height: "90%",
    }
    var editorPreviewStyle = {
        backgroundColor: "#C9C9D0",
        height: "90%"
    }
    var buttonStyle = {
        color: "#00006A",
        backgroundColor: "#C9C9D0",
        fontWeight: "400",
    }
    
    return (
        <div className="app-main w-100 px-sm-5 px-2 h-100" style={style}>
            <div className="row w-100 m-0 h-0">
                <button style={buttonStyle}  className="col-6 border-0 btn rounded-0 border-end border-light" onClick={() => edit()}>Edit</button>
                <button style={buttonStyle}  className="col-6 border-0 btn rounded-0 border-start border-light" onClick={() => preview()}>Preview</button>
            </div>
            <div className="w-100 m-0" style={editorPreviewStyle}>
                {mode === "preview"? 
                <div id="preview" className="w-100 h-100" dangerouslySetInnerHTML={{__html:marked(markdown)}}></div>: 
                <textarea id="editor" className="w-100 h-100 border-0" value={markdown} onChange={(event)=> updateMarkdown(event.target.value)} />}
            </div>
        </div>
    );
}

export default Main;