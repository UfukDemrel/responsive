import React, { useState, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const musicList = [
  {
    title: 'İkimize Birden',
    artist: 'Mert Demir',
    image: 'https://www.sozmuzik.com/wp-content/uploads/2023/08/mert_demir-640x640.jpg',
    audio: 'ikimizebirden.mp3',
  },
  {
    title: 'Olmuşum Leyla',
    artist: 'Buray',
    image: 'https://i1.sndcdn.com/artworks-j0IzobZsVMMI-0-t500x500.jpg',
    audio: 'olmusumleyla.mp3',
  },
  {
    title: 'Harbi Güzel',
    artist: 'Murat Boz',
    image: 'https://i.scdn.co/image/ab67616d0000b27338d487a236c25e08f52464c9',
    audio: 'harbiguzel.mp3',
  },
  {
    title: 'Uzunlar',
    artist: 'Evdeki Saat',
    image: 'https://www.dergy.com/wp-content/uploads/2020/02/evdeki-saat-2.png',
    audio: 'uzunlar.mp3',
  },
  {
    title: 'Something Just Like This',
    artist: 'The Chainsmokers',
    image: 'https://upload.wikimedia.org/wikipedia/tr/5/57/Something_Just_Like_This.png',
    audio: 'chainsmokers.mp3',
  },
  {
    title: 'Whats Up Danger?',
    artist: 'Blackway & Black Caviar',
    image: 'https://i.discogs.com/U8yh1_RvxRKuj8jFkHCVCuFwPkH-DUrjFrkarI7c6_I/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyOTQ2/Nzg0LTE1NDUwODg4/MDYtNDU4My5qcGVn.jpeg',
    audio: 'blackway.mp3',
  },
  {
    title: 'Not You',
    artist: 'Alan Walker',
    image: 'https://images.genius.com/30c87c5a9e1af1321c5a5aed79b19ad3.899x899x1.jpg',
    audio: 'notyou.mp3',
  },
  {
    title: 'Maps',
    artist: 'Maroon 5',
    image: 'https://i1.sndcdn.com/artworks-000088420306-xdledh-t500x500.jpg',
    audio: 'maroon.mp3',
  },
  {
    title: 'Sor',
    artist: 'Edis & Gülşen',
    image: 'https://www.snobmagazin.com/images/haberler/2023/08/edis-ve-gulsen-sor-ile-dunya-listesinde-zKgYG.jpg',
    audio: 'sor.mp3',
  },
  {
    title: 'Başıma Belasın',
    artist: 'Aleyna Tilki',
    image: 'https://tr.web.img4.acsta.net/pictures/20/12/28/09/07/1817655.jpg',
    audio: 'basimabelasin.mp3',
  },
  {
    title: 'Sen mi ben mi?',
    artist: 'KÖK$VL',
    image: 'koksal.jpeg',
    audio: 'senmibenmi.mp3',
  },
  {
    title: 'İki Kadeh',
    artist: 'Bilal Sonses',
    image: 'https://images.genius.com/682e7d60a6e59541877b56569de4c432.1000x1000x1.jpg',
    audio: 'ikikadeh.mp3',
  },
  {
    title: 'Geri Dönemedim',
    artist: 'Semicenk',
    image: 'https://ia.tmgrup.com.tr/ba5e54/1160/650/0/0/2048/1148?u=https://i.tmgrup.com.tr/rt/2023/05/08/semicenk-geri-donemedim-1683527940527.jpg',
    audio: 'geridönemedim.mp3',
  },
  {
    title: 'Numaracı',
    artist: 'Mabel Matiz',
    image: 'https://i.ytimg.com/vi/_7hNoxXoJTo/maxresdefault.jpg',
    audio: 'numaracı.mp3',
  },
  {
    title: 'Yaz Kenara',
    artist: 'Sıla Şahin',
    image: 'https://i.ytimg.com/vi/0DbcsEILLYU/maxresdefault.jpg',
    audio: 'yazkenara.mp3',
  },
  {
    title: 'Harcandıkça',
    artist: 'Simge',
    image: 'https://images.genius.com/f8370bf3162236595bc5bead5e53ab27.1000x1000x1.jpg',
    audio: 'numaracımp3',
  },
  {
    title: 'Eften Püften',
    artist: 'Irmak Arıcı',
    image: 'https://www.sozmuzik.com/wp-content/uploads/2023/07/irmak_arici1-640x640.jpg',
    audio: 'eftenpuften.mp3',
  },
  {
    title: 'Yok Mu?',
    artist: 'Oğuzhan Koç',
    image: 'https://www.sozmuzik.com/wp-content/uploads/2023/07/oguzhan_koc18-640x640.jpg',
    audio: 'yokmu.mp3',
  },
  {
    title: 'Tövbe',
    artist: 'Derya Bedavacı',
    image: 'https://i.scdn.co/image/ab67616d0000b273a7e06ade75166a22e05c4c9b',
    audio: 'tovbe.mp3',
  },
  {
    title: 'Benden Uzak Dur',
    artist: 'Tekir & Bedo',
    image: 'https://www.gulum.net/images/haberler/2023/07/bedo-ve-tekir-benden-uzak-dur-sarki-sozu-1090_1.jpg',
    audio: 'bendenuzakdur.mp3',
  },
  {
    title: 'Dayanamıyorum',
    artist: 'Kerim Araz & Sevgim Yılmaz',
    image: 'https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/94/b3/9f/94b39fe4-f9b1-8ac1-3a84-e687e07a6c39/cover.jpg/600x600bf-60.jpg',
    audio: 'dayanamıyorum.mp3',
  },
  {
    title: 'Gecelere Sor',
    artist: 'Burak Bulut',
    image: 'https://64.media.tumblr.com/23bc6c20774eff9e215000c0658cdd04/07ecd153bda96385-1b/s540x810/9c579d6d90ba5cfbd14bb4460e2b4a77f426054d.jpg',
    audio: 'geceleresor.mp3',
  },
  {
    title: 'Sen Yokken',
    artist: 'Hande Ünsal',
    image: 'https://www.muzikhabercisi.com/image/upload/2022/10/14/p_795634990b0e7f41-600x400.jpg',
    audio: 'senyokken.mp3',
  },
  {
    title: 'Çok Yazık',
    artist: 'Çağan Şengül',
    image: 'https://yt3.googleusercontent.com/BB9ALVgBQLod540EUNAz75G9Cwvmw-iJAP6wu7Rqn5LJIAo5-lZH767kxinQ4aeUbj_KlTNkXw=s900-c-k-c0x00ffffff-no-rj',
    audio: 'cokyazik.mp3',
  },
  {
    title: 'Manolya',
    artist: 'Burak Bulut & Kurtuluş Kuş',
    image: 'https://i1.sndcdn.com/artworks-iNzkpxtj8VNNRSDc-oG0rQg-t500x500.jpg',
    audio: 'manolya.mp3',
  },
  {
    title: 'Nefes',
    artist: 'Derya Uluğ',
    image: 'https://radyoviva.com.tr/wp-content/uploads/2023/07/4-scaled.jpg',
    audio: 'nefes.mp3',
  },
  {
    title: 'İhtimaller Perisi',
    artist: 'Gökhan Türkmen',
    image: 'https://i.ytimg.com/vi/rDYFw_xW8MM/maxresdefault.jpg',
    audio: 'ihtimaller.mp3',
  },
  {
    title: 'Beyaz',
    artist: 'Emir Can İğrek',
    image: 'https://cdn.powergroup.com.tr/image/0x0/powerturk/u/Contents/e/m/emir-745x465-1654843925.png',
    audio: 'beyaz.mp3',
  },
  {
    title: 'Space Song',
    artist: 'Beach House',
    image: 'https://i.ytimg.com/vi/RBtlPT23PTM/maxresdefault.jpg',
    audio: 'spacesong.mp3',
  },
  {
    title: 'Back To Black',
    artist: 'Amy Winehous',
    image: 'https://upload.wikimedia.org/wikipedia/tr/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png',
    audio: 'back.mp3',
  },  
  {
    title: 'Homage',
    artist: 'Mild High Club',
    image: 'https://i.ytimg.com/vi/oRGDhgITetc/sddefault.jpg',
    audio: 'homega.mp3',
  },
  {
    title: 'Im Good (Blue)',
    artist: 'Cupido',
    image: 'https://images.genius.com/f4eacd64dc39815cf3b789fc21b3e3b2.1000x1000x1.png',
    audio: 'good.mp3',
  },
  {
    title: 'Past Lives',
    artist: 'Sapientdream',
    image: 'https://cdns-images.dzcdn.net/images/cover/87fd256b0db65638ee3cae1546b752a0/500x500.jpg',
    audio: 'pastlives.mp3',
  },
  {
    title: 'Disfruto',
    artist: 'Carla Morrison',
    image: 'https://i1.sndcdn.com/artworks-zFgejISeUBD2u9Xi-YRzsZQ-t500x500.jpg',
    audio: 'disfruto.mp3',
  }
];


const New = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const audioRefs = useRef([]);

  const handlePlayButtonClick = (index) => {
    const audioElement = audioRefs.current[index];
  
    if (audioElement) {
      const isPlaying = !audioElement.paused;
      
      // Duraklatılan sesi kontrol et ve duraklat
      audioRefs.current.forEach((audioRef, audioIndex) => {
        if (audioIndex !== index) {
          audioRef.pause();
        }
      });
  
      if (!isPlaying) {
        audioElement.play();
        setActiveSlideIndex(index);
      } else {
        audioElement.pause();
        setActiveSlideIndex(null);
      }
    }
  };
  

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setActiveSlideIndex(null); // Arama yaparken sesi durdur
  };

  const filteredMusicList = musicList.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="new-container">
      <div>
      <div class="search-box">
        <input type="text" className="search-txt" name="" placeholder="Search" value={searchQuery} onChange={handleSearch}/>
        <div className="search-btn">
         <img className='search-icon' src='search.png' alt='alt'/>
        </div>
      </div>
      </div>
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
      {filteredMusicList.map((song, index) => (
      <SwiperSlide>
        <img className='new-img' src={song.image} alt='alt'/>
        <div className='new-div'>
          <button
            className="song-small-button"
            type="button"
            onClick={() => handlePlayButtonClick(index)}
          >
            {activeSlideIndex === index ? (
              <img className='stop-small' src="smallpause.png" alt="Pause" />
            ) : (
              <img className='stop-small' src="smallplay.png" alt="Play" />
            )}
          </button>
          <audio
            style={{ display: 'none' }}
            className="audio"
            ref={(element) => audioRefs.current[index] = element}
            controls
          >
            <source src={song.audio} type="audio/mpeg" />
          </audio>
        </div>
        <div className="new-song">{song.title}</div>
        <span className="new-artist">{song.artist}</span>
      </SwiperSlide>
      ))}


    </Swiper>
  </div>  
  );
};

export default New;
