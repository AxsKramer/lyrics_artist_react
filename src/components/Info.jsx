import React from 'react';

const Info = ({info}) => {

    const facebook =  {
        color: '#3b5998',
        fontSize: "3rem"
    }
      
    const twitter = {
        color: '#0084b4',
        fontSize: "3rem"
    }
      
    const lastfm = {
        color: '#d51007',
        fontSize: "3rem"
    }

    // if(Object.keys(info).length) return null;
    const { strArtistThumb, strGenre, strBiographyES,strBiographyEN} = info;
    
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                About Artist 
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" className='card-img-top'/>
                <p className="card-text">Genre: {strGenre}</p>
                <h2 className="card-text">Biography:</h2>
                <p className="card-text">{strBiographyEN}</p>
                <p className="card-text d-flex justify-content-around">
                    <a style={facebook} href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a style={twitter} href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a style={lastfm} href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}
 
export default Info;