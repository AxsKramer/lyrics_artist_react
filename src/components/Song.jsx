import React, { Fragment } from 'react';

const Song = ({lyrics}) => {

    const lyricsStyle = {
        whiteSpace: 'pre-wrap'
    }

    return ( 
        <Fragment>
            <h2>Lyrics</h2>
            <p style={lyricsStyle}>{lyrics}</p>
        </Fragment>
    );
}
 
export default Song;