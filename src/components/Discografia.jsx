import React, {Fragment} from 'react';
import Navegacion from './subcomponents/Navegacion'
import Logo from './subcomponents/Logo';
import Spotify from './subcomponents/Spotify';

const Discografia = () => {

    return (

    <Fragment >
        <div className="container container-discografia">
            <Logo/>
        <div className="container-top-discografia">
            <Spotify/>
        </div>
        <Navegacion/>
        </div>
    </Fragment> 

    )

    
}
 
export default Discografia;