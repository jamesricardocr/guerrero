import React, {Fragment} from 'react'
import Navegacion from './subcomponents/Navegacion';
import logo from '../img/logoBlanco.png';


const Home = () => {


    return (
        <Fragment>
            <div className="container container-home">
                <div className="container-top-home">
                <img className="logo-home" src={logo} alt="logo"/>
                </div>
                {/* <FormHome/> */}
                <Navegacion/>
            </div>

        </Fragment>
    );
}
 
export default Home;