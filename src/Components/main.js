import React, {useState} from 'react';
import {marked} from 'marked';
marked.use({
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartypants: false,
    xhtml: false
});
//let marked = require("marked");

function Main({theme}) {
    let defaultValue = '# Living God \n## Jesus Christ \n`console.log("God in me")` \n```\nfunction=()=>{\nalert("The Love of God");\n}\n``` \nFather | Son | Holy Spirit \n--------- | --------- | --------- \nThe LORD | my Lord | Spirit of Truth \n**Jireh** \n' ;
    const [markdown, setMarkdown] = useState(defaultValue);
    const updateMarkdown = (modifiedMarkdown) => {
        setMarkdown(modifiedMarkdown);
    }
    var style = {
        backgroundColor: "#EAE8F6",
        height: "90%",
    }
    var darkStyle = {
        backgroundColor: "#000020",
        height: "90%",
    }
    var editorPrevStyle = {
        height: "75%",
        backgroundColor: "#F5F5F5",
        color: "#1A237E"
    }
    var darkEditorPrevStyle = {
        height: "75%",
        backgroundColor: "#00002F",
        color: "#EAE8F6",
    }
    var headerStyle = {
        color: "#1A237E",
        fontWeight: "500",
        height: "",
        backgroundColor: "#F5F5F5",
    }
    var darkHeaderStyle = {
        color: "#EAE8F6",
        fontWeight: "500",
        height: "",
        backgroundColor: "#00002F",
    }
    var editorLightText = {
        color: "#1A237E",
    }
    var editorDarkText = {
        color: "#EAE8F6",
    }
    
    return (
        <div className="app-main w-100 px-sm-5 px-2 h-100 d-flex flex-column justify-content-center " style={theme === "light"?style: darkStyle}>
            <div className="w-100 shadow d-flex flex-row rounded-top align-items-center justify-content-between px-3" style={theme==="light"?headerStyle: darkHeaderStyle}>
                <p  className="border-0">Edit</p>
                <p className="border-0">Preview</p>
            </div>
            <div className="w-100 m-0 d-flex flex-row shadow rounded-bottom" style={theme==="light"?editorPrevStyle: darkEditorPrevStyle}> 
                <textarea id="editor" className="w-50 h-100 border-0 bg-transparent border-end border-dark p-2" value={markdown} style={theme==="dark"?editorDarkText: editorLightText} onChange={(event)=> updateMarkdown(event.target.value)}/>
                <div id="preview" className="w-50 h-100 overflow-auto border-start border-dark p-2" dangerouslySetInnerHTML={{__html:marked(markdown)}}></div>
            </div>
        </div>
    );
}

export default Main;