import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto mb-20">
            <SectionHeader
                title={`Testimonials`}
                subtitle={`What Our Clients Say`}
            ></SectionHeader>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>

                            <div className="px-28 gap-6 text-center flex flex-col items-center justify-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="text-7xl"><FaQuoteLeft /></p>
                                <p>{review.details}</p>
                                <h4 className="uppercase text-2xl text-[#CD9003]">{review.name}</h4>
                            </div>

                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;