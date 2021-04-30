import React, {Fragment}from 'react'
import Navegacion from './subcomponents/Navegacion';
import pipa from '../img/pipa.jpg'
import libro from '../img/libro.png'

const SobreMi = () => {
    return ( 
        <Fragment>
        <div className="container container-sobre-mi">
            <div className="container-top-sobre-mi">
                <img className="pipa" src={pipa} alt="pipa"/>
            </div>
            <div className="container-bottom-sobre-mi">

            <Navegacion/>
            </div>
        </div>
        </Fragment>
    
    );
}
 
export default SobreMi;