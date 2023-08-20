// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default () => {
  return (
    
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      loop
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
        <div className='new-song'>İkimize Birden</div>
        <span className='new-artist'>Mert Demir</span>
      </SwiperSlide>
      <SwiperSlide>
        <img className='new-img' src='https://www.sozmuzik.com/wp-content/uploads/2023/08/mert_demir-640x640.jpg' alt='alt'/>
        <div className='new-song'>İkimize Birden</div>
        <span className='new-artist'>Mert Demir</span>
      </SwiperSlide>
      <SwiperSlide>
        <img className='new-img' src='https://www.sozmuzik.com/wp-content/uploads/2023/08/mert_demir-640x640.jpg' alt='alt'/>
        <div className='new-song'>İkimize Birden</div>
        <span className='new-artist'>Mert Demir</span>
      </SwiperSlide>
      <SwiperSlide>
        <img className='new-img' src='https://www.sozmuzik.com/wp-content/uploads/2023/08/mert_demir-640x640.jpg' alt='alt'/>
        <div className='new-song'>İkimize Birden</div>
        <span className='new-artist'>Mert Demir</span>
      </SwiperSlide>
      <SwiperSlide>
        <img className='new-img' src='https://www.sozmuzik.com/wp-content/uploads/2023/08/mert_demir-640x640.jpg' alt='alt'/>
        <div className='new-song'>İkimize Birden</div>
        <span className='new-artist'>Mert Demir</span>
      </SwiperSlide>
      <SwiperSlide>
        <img className='new-img' src='https://www.sozmuzik.com/wp-content/uploads/2023/08/mert_demir-640x640.jpg' alt='alt'/>
      </SwiperSlide>
      <SwiperSlide>
        <img className='new-img' src='https://www.sozmuzik.com/wp-content/uploads/2023/08/mert_demir-640x640.jpg' alt='alt'/>
      </SwiperSlide>
      <SwiperSlide>
        <img className='new-img' src='https://www.sozmuzik.com/wp-content/uploads/2023/08/mert_demir-640x640.jpg' alt='alt'/>
      </SwiperSlide>
      <SwiperSlide>
        <img className='new-img' src='https://www.sozmuzik.com/wp-content/uploads/2023/08/mert_demir-640x640.jpg' alt='alt'/>
      </SwiperSlide>
    </Swiper>
  );
};