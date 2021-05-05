import React, {Fragment} from 'react'
import Navegacion from './subcomponents/Navegacion';
import logo from '../img/logoBlanco.png';
import FormHome from './subcomponents/FormHome';

const Home = () => {
    if( window.location.href.includes('/home?id=1')){
        
    }

    return (
        <Fragment>
            <div className="container container-home">
                <div className="container-top-home"></div>
                <div className="container-bottom-home">
                <img src={logo} alt="logo"/>
                <FormHome/>
                </div>
                <Navegacion/>
            </div>
        </Fragment>
    );
}
 
export default Home;