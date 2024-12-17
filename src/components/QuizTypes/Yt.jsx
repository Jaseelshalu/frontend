import React from 'react'
import YouTube from 'react-youtube';

const Yt = ({data}) => {
    console.log(data);
    const videoOptions = {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 1, // 0 to start without autoplay, 1 to autoplay
        },
      };
  return (
    <div className="video-container">
    <YouTube videoId={data.body} opts={videoOptions} />
  </div>
  )
}

export default Yt