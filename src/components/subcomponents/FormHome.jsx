import React, {Fragment} from 'react'
import RedesSociales from './redesSociales';

const FormHome = () => {
    return ( 
        <Fragment>
            <form className="form-home">
            <RedesSociales/>
                <input type="Email" placeholder="correo@correo.com"/>
                <input type="number" placeholder="32.."/>
                <button type="submit">Enviar</button>
            </form>
        </Fragment>       
    );
}
 
export default FormHome;