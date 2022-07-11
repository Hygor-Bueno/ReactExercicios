import { React } from "react";
/*FORMAS DE RETORNAR MULTIPLOS ELEMENTOS*/
export default props => 
[
    <h1 key="h1">Bom dia {props.nome}.</h1>,
    <h2 key="h2">Até mais...</h2>
]

// export default props => 
// <div>
//     <h1>Bom dia {props.nome}.</h1>
//     <h2>Até mais...</h2>
// </div>

// export default props => 
// <React.Fragment>
//     <h1>Bom dia {props.nome}.</h1>
//     <h2>Até mais...</h2>
// </React.Fragment>