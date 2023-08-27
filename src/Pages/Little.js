import React, { useState, useRef } from 'react';

function Little(props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(null);
  const audioRefs = useRef([]);

  const handlePlayButtonClick = (index) => {
    const audioElement = audioRefs.current[index];
    const currentActiveIndex = activeSlideIndex;

    if (audioElement) {
      if (currentActiveIndex === index) {
        if (audioElement.paused) {
          audioElement.play();
        } else {
          audioElement.pause();
        }
      } else {
        if (currentActiveIndex !== null && audioRefs.current[currentActiveIndex]) {
          audioRefs.current[currentActiveIndex].pause();
        }

        audioElement.play();
      }

      setActiveSlideIndex(currentActiveIndex === index ? null : index);
    }
  };

  return (
    <div className='grow'>
      <div className='little-div'>
        <button
          className="song-small-button"
          type="button"
          onClick={() => handlePlayButtonClick(props.number)}
        >
          {activeSlideIndex === props.number ? (
            <img className='little-music' src="smallpause.png" alt="Pause" />
          ) : (
            <img className='little-music' src="smallplay.png" alt="Play" />
          )}
        </button>
        <audio
          style={{ display: 'none' }}
          className="audio"
          ref={(element) => (audioRefs.current[props.number] = element)}
          controls
        >
          <source src={props.music} type="audio/mpeg" />
        </audio>
      </div>

      <div className='content'>
        <img className='little-music-img' src={props.image} alt='alt' />
        <h3 className='little-new-song'>{props.text}</h3>
        <p className='little-new-artist'>{props.title}</p>
      </div>
    </div>
  );
}

export default Little;
