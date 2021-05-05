import React,{Fragment} from 'react'
import Navegacion from './subcomponents/Navegacion'
import Logo from './subcomponents/Logo';

const Servicios = () => {
    return (
        <Fragment>
            <div className="container container-servicios">
            <div className="superior">
                <Logo/>
            </div>
            <div className="container-top-servicios">

            </div>
            <Navegacion/>
            </div>
        </Fragment>
    );
}
 
export default Servicios;