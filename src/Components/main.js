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
        backgroundColor: theme==="light"? "#EAE8F6": "#000020",
        height: "93%",
    }
    var editorPrevStyle = {
        height: "83%",
        backgroundColor: theme==="light"? "#F5F5F5": "#00002F",
        color: theme==="light"? "#1A237E": "#EAE8F6",
        border: theme==="dark" && "2px solid #EAE8F6",
    }
    var headerStyle = {
        color: theme==="light"? "#1A237E": "#EAE8F6",
        fontWeight: "500",
        height: "7%",
        backgroundColor: theme==="light"? "#F5F5F5": "#00002F",
        border: theme==="dark" && "2px solid #EAE8F6",
        borderBottom: theme==="light" && "1px solid #AE8E6F",
    }
    var editorStyle = {
        color: theme==="light"? "#1A237E": "#EAE8F6",
        resize: "horizontal",
        overflow:"auto",
    }
    var prevStyle = {
        overflow:"auto",
        borderLeft: theme==="light"? "1px solid #AE8E6F": "1px solid #EAE8F6",
    }
    
    return (
        <div className="app-main w-100 px-sm-5 px-2 d-flex flex-column justify-content-center" style={style}>
            <div className="w-100 shadow d-flex flex-row rounded-top align-items-center justify-content-between px-3" style={headerStyle}>
                <p  className="border-0 my-auto">Edit</p>
                <p className="border-0 my-auto">Preview</p>
            </div>
            <div className="w-100 m-0 d-flex flex-row shadow rounded-bottom" style={editorPrevStyle}> 
                <textarea id="editor" className="textarea w-50 h-100 bg-transparent p-2 flex-grow-1 border-0" value={markdown} style={ editorStyle} onChange={(event)=> updateMarkdown(event.target.value)}/>
                <div id="preview" className="w-50 h-100 overflow-auto p-2 flex-grow-3" style={prevStyle} dangerouslySetInnerHTML={{__html:marked(markdown)}}/>
            </div>
        </div>
    );
}

export default Main;