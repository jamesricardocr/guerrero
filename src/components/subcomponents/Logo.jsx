import React, {Fragment} from 'react'
import logo from '../../img/logoBlanco.png'
import {  useHistory } from 'react-router-dom';




const Logo = ({animacion}) => {
    
    const history = useHistory();

    if(animacion){
        setTimeout(() => {
            history.push('/home');
        }, 4500);
    }

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