import React, {Fragment} from 'react'
import {useHistory} from 'react-router-dom'

const Pdf = () => {

    const openDocument= (key) =>{

        switch (key) {
            case 1:
                window.open('/pdf/1.pdf','')
                break;
            case 2:
                window.open('/pdf/2.pdf','')
                break;
            case 3:
                window.open('/pdf/3.pdf','')
                break;
            case 4:
                window.open('/pdf/4.pdf','')
                break;

            default:
                break;
        }
    }

    return ( 
        <Fragment>
            <div className="container-documento-pdf">
            <div className="documento-pdf">
                <div className="logo-documento-pdf">
                    <i className="iconos fas fa-file-pdf"></i>
                </div>
                <div className="contenido-documento-pdf">
                    <h2>Cómo improvisar en 5 pasos.</h2>
                    <p onClick={()=> openDocument(1)}>Descargar.pdf</p>
                </div>
            </div>
            <div className="documento-pdf">
                <div className="logo-documento-pdf">
                    <i className="iconos fas fa-file-pdf"></i>
                </div>
                <div className="contenido-documento-pdf">
                    <h2>Jordu - Clifford Brown transcription.</h2>
                    <p onClick={()=> openDocument(2)}>Descargar.pdf</p>
                </div>
            </div>
            <div className="documento-pdf">
                <div className="logo-documento-pdf">
                    <i className="iconos fas fa-file-pdf"></i>
                </div>
                <div className="contenido-documento-pdf">
                    <h2>There will never be another you Woody Shaw.</h2>
                    <p onClick={()=> openDocument(3)}>Descargar.pdf</p>
                </div>
            </div>
            <div className="documento-pdf">
                <div className="logo-documento-pdf">
                    <i className="iconos fas fa-file-pdf"></i>
                </div>
                <div className="contenido-documento-pdf">
                    <h2>Trompetistas vol 1.0</h2>
                    <p onClick={()=> openDocument(4)}>Descargar.pdf</p>
                </div>
            </div>


            </div>
        </Fragment>
     );
}
 
export default Pdf;
