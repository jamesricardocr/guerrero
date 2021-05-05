import React, {Fragment} from 'react'
// import styleYoutube from './styleYoutube.css';

const Spotify = () => {
    return ( 
        
        <Fragment>
            <h1>Spotify</h1>
            <div className="musica-spotify">
            <iframe title="elemento" src="https://open.spotify.com/embed/track/7cicSegbQjPxtF7x5uSltq"  frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe title="amapola" src="https://open.spotify.com/embed/track/7cbsYQBPaLFc597xHaKOqt"  frameborder="0" allowtransparency="true " allow="encrypted-media"></iframe>
            <iframe title="sitevas" src="https://open.spotify.com/embed/track/2vIRfKt8Ds2PYsygJ7ySjw"  frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe title="tormento" src="https://open.spotify.com/embed/track/5Yt36rgeBH2iE13dXWQurx"  frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            
            </div> 
        </Fragment>
     );
}
 
export default Spotify;