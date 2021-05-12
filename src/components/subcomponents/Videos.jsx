import React, {Fragment} from 'react'

const Videos = () => {
    return ( 
        <Fragment>
            <div className="videos-educacion">
            <iframe src="https://www.youtube.com/embed/jXtNpb-Apfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
            <iframe src="https://www.youtube.com/embed/I0_8UKw0VFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
            </div>
        </Fragment>
    );
}
 
export default Videos;