import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navegacion from './subcomponents/Navegacion'
import Logo from './subcomponents/Logo';
import Youtube from './subcomponents/Youtube';
import Spotify from './subcomponents/Spotify';

const Discografia = () => {

    return (

    <Fragment >
        <div className="container container-discografia">
           <div className="superior">
           <Logo/>
               </div> 
        <div className="container-top-discografia">
            <Spotify/>
            {/* <Youtube/> */}
        </div>
        <Navegacion/>
        </div>
    </Fragment> 

    )

    
}
 
export default Discografia;