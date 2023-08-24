import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Slider from './Slider';

const myFunction = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      keyboard={true}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
        <Slider name="Evdeki Saat" song="Uzunlar" bimg="evdeki-saat.jpg" limg="uzunlar.jpg" music="uzunlar.mp3" />
    </SwiperSlide>

    <SwiperSlide>
        <Slider name="Blackway & Black Caviar" song="What's Up Danger" bimg="blackway.jpg" limg="danger.jpg" music="blackway.mp3" />
    </SwiperSlide>

    <SwiperSlide>
        <Slider name="Maroon 5" song="Maps" bimg="maroon.jpg" limg="maps.jpg" music="maroon.mp3" />
    </SwiperSlide>

    <SwiperSlide>
        <Slider name="The Chainsmokers & Coldplay" song="Something Just Like This" bimg="chainsmokers.jpg" limg="https://upload.wikimedia.org/wikipedia/tr/5/57/Something_Just_Like_This.png" music="chainsmokers.mp3" />
    </SwiperSlide>
    </Swiper>
  );
};

export default myFunction;