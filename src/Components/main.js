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
        <div className="app-main w-100 px-sm-5 px-2 h-75">
            <div className="row w-100 m-0 border rounded-top h-0">
                <button className="col-6 border-0 border-end border-dark" onClick={() => edit()}>Edit</button>
                <button className="col-6 border-0 border-start border-dark" onClick={() => preview()}>Preview</button>
            </div>
            <div className="w-100 m-0 h-100">
                {mode === "preview"? 
                <div id="preview" className="w-100 bg-light rounded-bottom h-100" dangerouslySetInnerHTML={{__html:marked(markdown)}}></div>: 
                <textarea id="editor" className="bg-light rounded-bottom w-100 h-100" value={markdown} onChange={(event)=> updateMarkdown(event.target.value)} />}
            </div>
        </div>
    );
}

export default Main;