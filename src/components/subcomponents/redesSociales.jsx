import React, {Fragment} from 'react'

const RedesSociales = () => {

        
    const contactar = () =>{
        window.open(`https://api.whatsapp.com/send?phone=573193416583&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sobre%20tus%20servicios%20`,'_blank');
    }

    return (  
        <Fragment>
            <div className="redes-sociales">
            <i onClick={()=> window.open('https://instagram.com/guerrerotrompeta?igshid=br3ery2gnoa2')} className="iconos fab fa-instagram"></i>
            <i onClick={()=> contactar()} class="iconos fab fa-whatsapp"></i>
            </div>
        </Fragment>
    );
}
 
export default RedesSociales;