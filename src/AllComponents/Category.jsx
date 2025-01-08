import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from '../../src/assets/home/slide1.jpg'
import slide2 from '../../src/assets/home/slide2.jpg'
import slide3 from '../../src/assets/home/slide3.jpg'
import slide4 from '../../src/assets/home/slide4.jpg'
import slide5 from '../../src/assets/home/slide5.jpg'

const text1 = 'Salads';
const text2 = 'Soups';
const text3 = 'pizzas';
const text4 = 'desserts';
const text5 = 'Salads';


const Category = () => {
    return (
        <div className='my-8'>
            
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
      
       
       

       <SwiperSlide>
      
     <div className='relative'>
     <img src={slide1} alt="" />
      <p className='text-white bottom-0 left-[50%] translate-x-[-50%] pb-4 absolute  z-20     text-xl uppercase '>{text1}</p>
     
     </div>
       </SwiperSlide>
       <SwiperSlide >
      <div className='relative'>
      <img src={slide2} alt="" />
      <p className='text-white bottom-0 left-[50%] translate-x-[-50%] pb-4 absolute  z-20     text-xl uppercase '>{text2}</p>
      </div>
       </SwiperSlide>
       <SwiperSlide>
      <div className='relative'>
      <img src={slide3} alt="" />
      <p className='text-white bottom-0 left-[50%] translate-x-[-50%] pb-4 absolute  z-20     text-xl uppercase '>{text3}</p>
      </div>
       </SwiperSlide>
       <SwiperSlide>
      <div className='relative'>
      <img src={slide4} alt="" />
      <p className='text-white bottom-0 left-[50%] translate-x-[-50%] pb-4 absolute  z-20     text-xl uppercase '>{text4}</p>
      </div>
       </SwiperSlide>
       <SwiperSlide>
      <div className='relative'>
      <img src={slide5} alt="" />
      <p className='text-white bottom-0 left-[50%] translate-x-[-50%] pb-4 absolute  z-20     text-xl uppercase '>{text5}</p>
      </div>
       </SwiperSlide>
      
       
      </Swiper>
        </div>
    );
};

export default Category;