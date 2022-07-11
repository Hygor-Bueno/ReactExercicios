import React from 'react';
import ReactDom from 'react-dom';
// import Primeiro from "./components/Primeiro"
// import BomDia from './components/BomDia'
import Multi,{ BoaNoite } from './components/Multiplos'
ReactDom.render(
    <div>
        <Multi.BoaTarde nome="ANA" />
        <BoaNoite nome="BIA" />
    </div>, 
    document.getElementById('root')
);