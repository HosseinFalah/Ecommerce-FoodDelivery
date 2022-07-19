// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TestimonialSlider.css"

// avatar
import ava_1 from "../../../Asset/images/ava-1.jpg"
import ava_2 from "../../../Asset/images/ava-2.jpg"
import ava_3 from "../../../Asset/images/ava-3.jpg"

const TestimonialSlider = () => {
    return (        
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <p className="Swiper__text">
                    John Doe (male) and Jane Doe (female) are multiple-use placeholder names that are used when the true name of a person is unknown or is being intentionally concealed. In the context of law enforcement in the United States, such names are often used to refer to a corpse whose identity is unknown or unconfirmed.
                    </p>
                    <div className="Swiper__avatar">
                        <img src={ava_1} className="img__slider" alt="avatar" />
                        <h6>Jhon Doe</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="Swiper__text">
                        Marsh is the second son of Geoff Marsh and younger brother of Shaun Marsh, both of whom have played for the Australian national side. His sister, Melissa Marsh, was a professional basketball player in Australian leagues and he is cousin to West Coast Eagles player, Brad Sheppard. He was raised in Perth, Western Australia, where he attended Wesley College.
                    </p>
                    <div className="Swiper__avatar">
                        <img src={ava_2} className="img__slider" alt="avatar" />
                        <h6>Mitchell Marsh</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="Swiper__text">
                        Steven Paul Crook (born 28 May 1983) is a former Australian cricketer who played for Northamptonshire in English county cricket. He is an all-rounder, batting right-handed and bowling right-arm fast medium pace.
                    </p>
                    <div className="Swiper__avatar">
                        <img src={ava_3} className="img__slider" alt="avatar" />
                        <h6>Steven Crock</h6>
                    </div>
                </SwiperSlide>
        </Swiper>
    );
}
        
export default TestimonialSlider