import React from "react";
import ReactDOM from "react-dom/client";

// import Primeiro from "./components/Primeiro"
// import BomDia from './components/BomDia'
// import Multi,{ BoaNoite } from './components/Multiplos'
// import Saudacao from './components/Saudacao'
import Pai from './components/Pai';
import Filhos from './components/Filho'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Pai sobrenome="Azevedo" nome="Hygor">
            <Filhos nome="Ana" />
            <Filhos nome="Pedro" />
        </Pai>
    </div>
);

// ReactDom.render(
//     <div>
//         <Multi.BoaTarde nome="ANA" />
//         <BoaNoite nome="BIA" />
//     </div>,
//     document.getElementById('root')
// );