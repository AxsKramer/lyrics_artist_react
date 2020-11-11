import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import Song from '../components/Song';
import Info from '../components/Info';

function App() {

  const [searchLyrics, setSearchLyrics ] = useState({});
  const [lyrics, setLyrics] = useState('');
  const [info, setInfo] = useState({});

  useEffect(() => {
    if(Object.keys(searchLyrics).length === 0 ) return;

    const getDataFromAPIS = async () => {
      const { artist, song } = searchLyrics;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const [lyric, information] = await Promise.all([axios(url), axios(url2)]);
      setLyrics(lyric.data.lyrics);
      setInfo(information.data.artists[0]);
      console.log(lyric.data.lyrics)
		}
		
    getDataFromAPIS();
  }, [searchLyrics]);

  return (
    <Fragment>
      <Form setSearchLyrics={setSearchLyrics}/>
			{
        (lyrics !== '' && Object.values(info).length) 
          ? (
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <Info info={info}/>
              </div>
              <div className="col-md-6">
                <Song lyrics={lyrics}/>
              </div>
            </div>
          </div>
          )
          : null
      }
    </Fragment>
  );
}

export default App;