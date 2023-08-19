import React, {useState} from 'react'

function Slider(props) {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const handlePlayButtonClick = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className=''>
        <img className='big-logo' src={props.bimg} alt="alt" />
        <div className="mobile">
            <audio style={{display: 'none'}} className="audio" ref={audioRef} controls>
              <source src={props.music} type="audio/mpeg"/>
            </audio>
            <button className='song-button' type="button" onClick={handlePlayButtonClick}>
              {isPlaying ?  <img className='stop' src="play.png" alt="Play"/> : <img className='stop' src="pause.png" alt="Pause"/>}
              </button>
        </div>
        
        <div className='lyrics'>
          <div className='lyrics-title'>{props.name}</div>
          <div className='lyrics-text'>{props.song}</div>
        </div>

        <div className="little">
            <audio style={{display: 'none'}} className="audio" ref={audioRef} controls>
              <source src={props.music} type="audio/mpeg"/>
            </audio>
            <button className='song-button' type="button" onClick={handlePlayButtonClick}>
              {isPlaying ?  <img className='stop' src="play.png" alt="Play"/> : <img className='stop' src="pause.png" alt="Pause"/>}
              <img className={`little-logo ${isPlaying ? 'active' : ''}`} src={props.limg} alt="alt" />
              </button>
        </div>
    </div>
  )
}

export default Slider;