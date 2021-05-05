import React, {Fragment} from 'react'
import logo from '../../img/logoBlanco.png'
import Home from '../Home';

const Logo = ({animacion}) => {
    
    if(animacion){
        setTimeout(() => {
            window.location.href = '/home?id=1'
        }, 4500);
    }
    
    const logoAnimado = true;
    
    <Home
        logoAnimado={logoAnimado}
    />
    return ( 
        <Fragment>
            {animacion
            ?
                (
                    <img
                    className={animacion}
                    src={logo} 
                    alt="logo"
                    />  
                )
            :
                (
                    <img
                    className={'logo'}
                    src={logo} 
                    alt="logo"
                    /> 
                )
            }
            
        </Fragment>
     )
 

 
}
 
export default Logo;