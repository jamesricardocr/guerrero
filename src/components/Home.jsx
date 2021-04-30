import React, {Fragment} from 'react'
import Navegacion from './subcomponents/Navegacion';
import logo from '../img/logoBlanco.png'
import FormHome from './subcomponents/FormHome';

const Home = () => {
    
    return (
        <Fragment>
            <div className="container container-home">
                <div className="container-top-home"></div>
                <div className="container-bottom-home">
                <img src={logo} alt="logo"/>
                <FormHome/>
                <Navegacion/>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Home;