import React, {useState} from 'react';
import {marked} from 'marked';
//let marked = require("marked");

function Main({theme}) {
    const [markdown, setMarkdown] = useState("");
    const updateMarkdown = (modifiedMarkdown) => {
        setMarkdown(modifiedMarkdown);
    }
    var style = {
        backgroundColor: "#EAE8F6",
        height: "90%",
    }
    var darkStyle = {
        backgroundColor: "#00003E",
        height: "90%",
    }
    var editorPreviewStyle = {
        height: "75%",
    }
    var headerStyle = {
        color: "#1A237E",
        fontWeight: "500",
        height: "",
    }
    
    return (
        <div className="app-main w-100 px-sm-5 px-2 h-100 d-flex flex-column" style={theme === "light"?style: darkStyle}>
            <div className="w-100 shadow d-flex flex-row rounded-top bg-light align-items-center justify-content-between px-3" style={headerStyle}>
                <p  className="border-0">Edit</p>
                <p className="border-0">Preview</p>
            </div>
            <div className="w-100 m-0 d-flex flex-row shadow rounded-bottom bg-light" style={editorPreviewStyle}> 
                <textarea id="editor" className="w-50 h-100 border-0 bg-transparent border-end border-dark p-2" value={markdown} onChange={(event)=> updateMarkdown(event.target.value)}/>
                <div id="preview" className="w-50 h-100 overflow-auto border-start border-dark p-2" dangerouslySetInnerHTML={{__html:marked(markdown)}}></div>
            </div>
        </div>
    );
}

export default Main;