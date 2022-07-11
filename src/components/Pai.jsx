import React from 'react';
import Filho from './Filho';
import {childrenWithProps} from '../utils/Utils'

export default function Pai(props) { 
    return  <div>
                <h1>{props.nome} {props.sobrenome}</h1>
                <h2>Filhos</h2>
                <ul>    
                    <Filho {...props} nome="Carla"/>
                    {
                        childrenWithProps(props)
                    }
                </ul>
            </div>
}