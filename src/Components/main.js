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
    
    return (
        <div className="app-main col mx-0">
            <div className="row w-100">
                <button className="col" onClick={() => edit()}>Edit</button>
                <button className="col" onClick={() => preview()}>Preview</button>
            </div>
            <div className="w-100 h-100">
                {mode === "preview"? 
                <div id="preview" className="block w-100 bg-light" dangerouslySetInnerHTML={{__html:marked(markdown)}}></div>: 
                <textarea id="editor" className="bg-light w-100" value={markdown} onChange={(event)=> updateMarkdown(event.target.value)} />}
            </div>
        </div>
    );
}

export default Main;