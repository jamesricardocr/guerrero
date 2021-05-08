import React, {Fragment} from 'react'

const ServiciosBtn = () => {
    return ( 

        <Fragment>
            <div className="container-lista-servicios">
                <div className="servicios">
                    <h2>Clases particulares </h2>
                    <p>clases de trompeta, armonía moderna, improvisación, arreglos y pedagogía musical.</p>
                    <h3 className="btn">Contactar</h3>  
                </div>
                <div className="servicios">
                    <h2>Master Class </h2>
                    <p>"El jazz es cosa de niños" en esta master class comparto algunas ideas acerca de mi experiencia enseñando jazz a niños, material bibliográfico, tips de pedagogía y varias de mis conclusiones</p>
                    <h3 className="btn">Contactar</h3>  
                </div>
                <div className="servicios">
                    <h2>Grabación de trompetas y flugelhorn </h2>
                    <p>Ofrezco la posibilidad de realizar grabaciones remotas. Equipos de grabacion:
                    Interface audient id14 mk2, micrófonos rode nt1 a y Sm 57.</p>
                    <h3 className="btn" onClick={()=>alert('holaaa')}>Contactar</h3>  
                </div>
            </div>

        </Fragment>


     );
}
 
export default ServiciosBtn;