import React, {Fragment}from 'react'
import {Link} from 'react-router-dom'
import trompeta from '../../img/trompeta.png';
import Copy from './Copy';

const Navegacion = () => {
    return ( 
        <Fragment>
            <div className="base">
            <div className="navegacion">
            <Link to="/home"><i className="iconos fas fa-home"></i><p>Home</p></Link>
            <Link to="/sobre-mi"><i className="iconos fas fa-user"></i><p>sobre mi</p></Link>
            <Link to="/educacion"><i className="iconos fas fa-book"></i><p>Educación</p></Link>
            <Link to="/servicios"><img src={trompeta} alt="trompeta" className="trompeta-icon"/><p>Servicios</p></Link>
            <Link to="/discografia"><i className="iconos fas fa-compact-disc"></i><p>Discografía</p></Link>
            </div>
            <Copy/>
            </div>
        </Fragment>
    
        );
}
 
export default Navegacion;