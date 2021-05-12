import React, {Fragment}from 'react'
import {Link} from 'react-router-dom'
import trompeta from '../../img/trompeta.png';

const Navegacion = () => {
    return ( 
        <Fragment>
            <div className="navegacion">
            <Link to="/home"><i class="iconos fas fa-home"></i></Link>
            <Link to="/sobre-mi"><i class="iconos fas fa-user"></i></Link>
            <Link to="/educacion"><i class="iconos fas fa-book"></i></Link>
            <Link to="/servicios"><img src={trompeta} alt="" className="trompeta-icon"/></Link>
            <Link to="/discografia"><i class="iconos fas fa-compact-disc"></i></Link>
            </div>
        </Fragment>
    
        );
}
 
export default Navegacion;