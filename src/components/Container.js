import React, {
  Component
} from 'react';
import Editor from './Editor';
import Preview from './Preview';

const firstxt =
  `Este es el primer párrafo

# Hola esta es la cabecera
## Esta es una segunda o subcabecera
### Este es otro titulo mas pequeño

**Este es un texto en negrita**
<br>
*Este es un texto en cursiva*

> Bloque de Notas!

# Título
## Título 2

- lista item 1
- lista item 2
- lista item 3
his is a inline \`<div> Andrea </div>\`
This is a block of code:

1. Lista con números
1. Lista con números
1. Lista con números

\`\`\`
var x = 1;
var y = 2;
var z = x + y;
\`\`\`

Tablas por aqui!!

Un Header | Otro Header | Y otro Header?
------------ | ------------- | ------------- 
Tu contenido aqui,|tambien aqui,| o por aca...
y Aqui! | Okay... | y otras por aca, 

* No olvides agregar algunas imagenes:

![React Logo w/ Text](https://goo.gl/Umyytc)`
export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: firstxt
    }
  }
  navajowhite
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    const {
      text
    } = this.state;
    return (
      <div id = "page">
        <Editor text = {text}
        event = {this.handleChange}> 
        </Editor> 
        <Preview text = {text}> 
        </Preview> 
      </div>
    )
  }
}