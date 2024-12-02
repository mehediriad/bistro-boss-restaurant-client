import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import SectionHeader from '../SectionHeader/SectionHeader';

const CategorySwiper = () => {
    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <div>
                <SectionHeader 
                title={`ORDER ONLINE`}
                subtitle={`From 11:00am to 10:00pm`}
                ></SectionHeader>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="Slide Image" />
                    <h2 className='text-center text-4xl uppercase -mt-20 font-bold text-white p-6'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide Image" />
                    <h2 className='text-center text-4xl uppercase -mt-20 font-bold text-white'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slide Image" />
                    <h2 className='text-center text-4xl uppercase -mt-20 font-bold text-white'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="Slide Image" />
                    <h2 className='text-center text-4xl uppercase -mt-20 font-bold text-white'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="Slide Image" />
                    <h2 className='text-center text-4xl uppercase -mt-20 font-bold text-white'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide Image" />
                    <h2 className='text-center text-4xl uppercase -mt-20 font-bold text-white'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slide Image" />
                    <h2 className='text-center text-4xl uppercase -mt-20 font-bold text-white'>Pizzas</h2>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default CategorySwiper;