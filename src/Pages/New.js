import React, { useState, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const New = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(null);
  const audioRefs = useRef([]);

  const handlePlayButtonClick = (index) => {
    const audioElement = audioRefs.current[index];
    const currentActiveIndex = activeSlideIndex;
  
    if (audioElement) {
      if (currentActiveIndex === index) {
        if (audioElement.paused) {
          setActiveSlideIndex(index);
          audioElement.play();
        } else {
          setActiveSlideIndex(null);
          audioElement.pause();
        }
      } else {
        // Duraklatılan sesi kontrol et ve duraklat
        if (currentActiveIndex !== null && audioRefs.current[currentActiveIndex]) {
          audioRefs.current[currentActiveIndex].pause();
        }
  
        setActiveSlideIndex(index);
        audioElement.play();
      }
    }
  };  

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      keyboard
      breakpoints={{
        1240: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='new-img' src='https://www.sozmuzik.com/wp-content/uploads/2023/08/mert_demir-640x640.jpg' alt='alt'/>
        <div className='new-div'>
          <button
            className="song-small-button"
            type="button"
            onClick={() => handlePlayButtonClick(0)}
          >
            {activeSlideIndex === 0 ? (
              <img className='stop-small' src="smallpause.png" alt="Pause" />
            ) : (
              <img className='stop-small' src="smallplay.png" alt="Play" />
            )}
          </button>
          <audio
            style={{ display: 'none' }}
            className="audio"
            ref={(element) => audioRefs.current[0] = element}
            controls
          >
            <source src='ikimizebirden.mp3' type="audio/mpeg" />
          </audio>
        </div>
        <div className='new-song'>İkimize Birden</div>
        <span className='new-artist'>Mert Demir</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className='new-img' src='https://mp3kutu.com/album/buray-olmusum-leyla.jpg' alt='alt'/>
        <div className='new-div'>
          <button
            className="song-small-button"
            type="button"
            onClick={() => handlePlayButtonClick(1)}
          >
            {activeSlideIndex === 1 ? (
              <img className='stop-small' src="smallpause.png" alt="Pause" />
            ) : (
              <img className='stop-small' src="smallplay.png" alt="Play" />
            )}
          </button>
          <audio
            style={{ display: 'none' }}
            className="audio"
            ref={(element) => audioRefs.current[1] = element}
            controls
          >
            <source src="olmusumleyla.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className='new-song'>Olmuşum Leyla</div>
        <span className='new-artist'>Buray</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className='new-img' src='https://images.genius.com/c6a8099d63aebe82c96372c10ebd1a50.1000x1000x1.jpg' alt='alt'/>
        <div className='new-div'>
          <button
            className="song-small-button"
            type="button"
            onClick={() => handlePlayButtonClick(2)}
          >
            {activeSlideIndex === 2 ? (
              <img className='stop-small' src="smallpause.png" alt="Pause" />
            ) : (
              <img className='stop-small' src="smallplay.png" alt="Play" />
            )}
          </button>
          <audio
            style={{ display: 'none' }}
            className="audio"
            ref={(element) => audioRefs.current[2] = element}
            controls
          >
            <source src="ararımyarın.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className='new-song'>Ararım Yarın</div>
        <span className='new-artist'>Mero & Murda</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className='new-img' src='https://images.genius.com/30c87c5a9e1af1321c5a5aed79b19ad3.899x899x1.jpg' alt='alt'/>
        <div className='new-div'>
          <button
            className="song-small-button"
            type="button"
            onClick={() => handlePlayButtonClick(3)}
          >
            {activeSlideIndex === 3 ? (
              <img className='stop-small' src="smallpause.png" alt="Pause" />
            ) : (
              <img className='stop-small' src="smallplay.png" alt="Play" />
            )}
          </button>
          <audio
            style={{ display: 'none' }}
            className="audio"
            ref={(element) => audioRefs.current[3] = element}
            controls
          >
            <source src="notyou.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className='new-song'>Not You</div>
        <span className='new-artist'>EP • Alan Walker</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className='new-img' src='https://images.genius.com/6a0eb9c041eddb7ea25c27c937aa3eee.1000x1000x1.jpg' alt='alt'/>
        <div className='new-div'>
          <button
            className="song-small-button"
            type="button"
            onClick={() => handlePlayButtonClick(4)}
          >
            {activeSlideIndex === 4 ? (
              <img className='stop-small' src="smallpause.png" alt="Pause" />
            ) : (
              <img className='stop-small' src="smallplay.png" alt="Play" />
            )}
          </button>
          <audio
            style={{ display: 'none' }}
            className="audio"
            ref={(element) => audioRefs.current[4] = element}
            controls
          >
            <source src="sor.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className='new-song'>Sor</div>
        <span className='new-artist'>Edis ve Gülşen</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className='new-img' src='https://i.scdn.co/image/ab67616d0000b27338d487a236c25e08f52464c9' alt='alt'/>
        <div className='new-div'>
          <button
            className="song-small-button"
            type="button"
            onClick={() => handlePlayButtonClick(5)}
          >
            {activeSlideIndex === 5 ? (
              <img className='stop-small' src="smallpause.png" alt="Pause" />
            ) : (
              <img className='stop-small' src="smallplay.png" alt="Play" />
            )}
          </button>
          <audio
            style={{ display: 'none' }}
            className="audio"
            ref={(element) => audioRefs.current[5] = element}
            controls
          >
            <source src="harbiguzel.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className='new-song'>Harbi Güzel</div>
        <span className='new-artist'>Murat Boz</span>
      </SwiperSlide>

    </Swiper>
  );
};

export default New;
