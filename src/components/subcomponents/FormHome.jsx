import React, {Fragment} from 'react'


const FormHome = () => {
    return ( 
        <Fragment>
            <form className="form-home">

                <label 
                id="label" 
                htmlFor="numeroContacto"
                >Nombre</label>

                <input 
                type="text"  
                name="tu nombre"/>

                <button 
                type="submit"
                >Contactar</button>
            </form>
        </Fragment>       
    );
}
 
export default FormHome;