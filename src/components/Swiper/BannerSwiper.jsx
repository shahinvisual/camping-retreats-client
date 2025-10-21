// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import ArcticLights from '../../assets/Arctic Lights Winter Camp.jpg'
import VolcanicBasecamp from '../../assets/Volcanic Vista Basecamp.jpg'
import RiverKayak from '../../assets/Forest River Kayak & Camp.jpg'
import DesertStargazer from '../../assets/Desert Stargazer Oasis.jpg'

const BannerSwiper = () => {
    return (
        <div className='mt-8'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-[250px] sm:h-[350px] md:h-[450px] rounded-xl"
            >
                <SwiperSlide><img className='h-full w-full object-cover' src={ArcticLights} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src={VolcanicBasecamp} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src={RiverKayak} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src={DesertStargazer} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSwiper;