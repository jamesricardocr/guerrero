import React, {Fragment}from 'react'
import Logo from './subcomponents/Logo';

const Animacion = () => {
    // pasar el props para el cambio de clase
    const animacion = 'animacion';

    return ( 
    <Fragment>
        <div className="container container-logo-animacion">
        <Logo
            animacion={animacion}
        /> 
        </div>

    </Fragment>  
    );
}
 
export default Animacion;