import React from 'react';

const Editor = ({event, text}) => {
    return (
        <textarea id="editor" onChange={event} value={text}/>
    )
}

export default Editor 