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

function Main({theme}) {
    let defaultValue = '# Living God \n## Jesus Christ \n`console.log("God in me")` \n```\nfunction=()=>{\nalert("The Love of God");\n}\n``` \nYou can also make text **bold**... whoa! \nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\nTheres also [links](https://www.freecodecamp.org), and \n> Block Quotes!\nAnd if you want to get really crazy, even tables: \nWild Header | Crazy Header | Another Header? \n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n- And of course there are lists. \n - Some are bulleted. \n  - With different indentation levels. \n   - That look like this. \n1. And there are numbered lists too. \n1. Use just 1s if you want! \n1. And last but not least, lets not forget embedded images: \n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)' ;
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
                <textarea id="editor" className="textarea w-50 h-100 border-0 bg-transparent border-end border-dark p-2" value={markdown} style={theme==="dark"?editorDarkText: editorLightText} onChange={(event)=> updateMarkdown(event.target.value)}/>
                <div id="preview" className="w-50 h-100 overflow-auto border-start border-dark p-2" dangerouslySetInnerHTML={{__html:marked(markdown)}}></div>
            </div>
        </div>
    );
}

export default Main;