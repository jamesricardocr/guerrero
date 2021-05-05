import React, {Fragment}from 'react'
import Navegacion from './subcomponents/Navegacion';
import Logo from './subcomponents/Logo';
import RedesSociales from './subcomponents/redesSociales';


const SobreMi = () => {
    return ( 
        <Fragment>
        <div className="container container-sobre-mi">
            <div className="superior">
                <Logo/>
            </div>
            <div className="container-top-sobre-mi">
                <RedesSociales/>
                <div className="contenido-sobre-mi">
                    <p>
                        Mi nombre es John Guerrero soy docente y trompetista, desde hace varios años me dedico a la educación musical y más específicamente a la enseñanza del jazz, en el año 2017 inicié un proyecto llamado Albor big band, este grupo hace parte de la escuela de artes y música de la Universidad Sergio Arboleda y está conformado por niños y jóvenes. La creación de esta big band me motivó a iniciar una investigación en torno a la manera en la que un niño podría acercarse a la interpretación del jazz. <br/>
                        En este portal podrán encontrar información y material relacionado con esta investigación, ideas y tips para improvisar, material relacionado con el mundo de la trompeta, transcripciones de solos, y mucho más. Espero que toda la información aquí compartida nos ayude a crecer como músicos y comunidad.
                    </p>    
                </div>
            </div>
            <div className="container-bottom-sobre-mi">
            </div>
            <Navegacion/>
        </div>
        </Fragment>
    
    );
}
 
export default SobreMi;