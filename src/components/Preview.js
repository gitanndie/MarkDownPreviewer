import React from 'react';
import marked from 'marked';

const Preview = ({text}) => {
    const textoMarked = marked(text);   
    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: textoMarked }} ></div>
    )
}
export default Preview