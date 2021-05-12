import React,{Fragment} from 'react';
import Navegacion from './subcomponents/Navegacion';
import Logo from './subcomponents/Logo';
import Pdf from './subcomponents/Pdf'
import Videos from './subcomponents/Videos'

const Educacion = () => {
    return (
        <Fragment>
            <div className="container container-educacion">
                    <Logo/>
            <div className="container-top-educacion">
                <Pdf/>
                <Videos/>
            </div>
            <Navegacion/>
            </div>
        </Fragment>
    );
}
 
export default Educacion;