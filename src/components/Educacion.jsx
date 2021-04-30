import React,{Fragment} from 'react'
import Navegacion from './subcomponents/Navegacion'
import fondo from './educacion.css'

const Educacion = () => {
    return (
        <Fragment>
            <div className="container container-educacion">
            <div className="container-top-educacion"></div>
            <Navegacion/>
            </div>
        </Fragment>
    );
}
 
export default Educacion;