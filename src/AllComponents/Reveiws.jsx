import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import Heading from '../SharedComponents/Heading';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { MdSentimentVerySatisfied } from 'react-icons/md';

const Reveiws = () => {
    const [reveiw, setReveiw] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/reviews`)
            .then(res => res.json())
            .then(data => setReveiw(data))
    }, [])

    return (

        <div className='w-8/12 my-12 p-4 mx-auto'>
            <Heading subHeading='---What Our Clients Say---' heading='TESTIMONIALS'></Heading>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reveiw.map(data =>
                     <SwiperSlide key={data._id}>
                      <div className='px-16 py-8 shadow-md my-4 flex flex-col justify-center items-center space-x-2 space-y-2'>
                      <MdSentimentVerySatisfied size={45} />
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={data.rating}

                            isRequired
                        />
                        <p className='text-gray-600 py-4'>{data.details}</p>
                        <p className='text-2xl text-yellow-500'>{data.name}</p>
                      </div>
                    </SwiperSlide>
                    )
                }


            </Swiper>

        </div>
    );
};

export default Reveiws;