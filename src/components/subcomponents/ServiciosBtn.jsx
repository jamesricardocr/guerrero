import React, {Fragment} from 'react'

const ServiciosBtn = () => {
    
    const contactar = (servicio) =>{
        window.open(`https://api.whatsapp.com/send?phone=573193416583&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20${servicio}`,'_blank');
    }
    
    return ( 

        <Fragment>
            <div className="container-lista-servicios">
                <div className="servicios">
                    <h2>Clases particulares </h2>
                    <p>Clases de trompeta, armonía moderna, improvisación, arreglos y pedagogía musical.</p>
                    <h3 className="btn" onClick={()=> contactar('Clases particulares')}>Contactar</h3>  
                </div>
                <div className="servicios">
                    <h2>Master Class </h2>
                    <p>"El jazz es cosa de niños" en esta master class comparto algunas ideas acerca de mi experiencia enseñando jazz a niños, material bibliográfico, tips de pedagogía y varias de mis conclusiones</p>
                    <h3 className="btn" onClick={()=> contactar('Master Class')}>Contactar</h3>  
                </div>
                <div className="servicios">
                    <h2>Grabación de trompetas y flugelhorn </h2>
                    <p>Ofrezco la posibilidad de realizar grabaciones remotas. Equipos de grabación:
                    Interface audient id14 mk2, micrófonos rode nt1 a y Sm 57.</p>
                    <h3 className="btn" onClick={()=> contactar('Grabación de trompetas y flugelhorn')}>Contactar</h3>  
                </div>
            </div>

        </Fragment>


     );
}
 
export default ServiciosBtn;