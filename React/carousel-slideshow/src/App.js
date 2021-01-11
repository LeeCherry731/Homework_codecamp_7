import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
// Import Swiper styles
import './styles.css';
import 'swiper/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

const datas = [
  { id: 1, path: 'https://picsum.photos/id/16/500/300' },
  { id: 2, path: 'https://picsum.photos/id/26/500/300' },
  { id: 3, path: 'https://picsum.photos/id/33/500/300' },
  { id: 4, path: 'https://picsum.photos/id/48/500/300' },
  { id: 5, path: 'https://picsum.photos/id/52/500/300' },
  { id: 6, path: 'https://picsum.photos/id/64/500/300' }

]

const App = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        tag="section" wrapperTag="ul"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={100}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {datas.map(data => (
          <SwiperSlide key={data.id} className="slide" tag="li" style={{ listStyle: 'none' }}>
            <img src={data.path} alt="" srcset="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        style={{marginTop: '40px'}}
        id="thumbs"
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={3}
      >
        {datas.map(data => (
          <SwiperSlide key={data.id} className="slide" tag="li" style={{ listStyle: 'none' }}>
            <img src={data.path} alt="" srcset="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default App;
