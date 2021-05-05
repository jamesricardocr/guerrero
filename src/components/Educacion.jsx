import React,{Fragment} from 'react';
import Navegacion from './subcomponents/Navegacion';
import Logo from './subcomponents/Logo';

const Educacion = () => {
    return (
        <Fragment>
            <div className="container container-educacion">
            <div className="container-top-educacion">
            <Logo/> 
            </div>
            <Navegacion/>
            </div>
        </Fragment>
    );
}
 
export default Educacion;