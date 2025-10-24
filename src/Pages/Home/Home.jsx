import BannerSwiper from '../../components/Swiper/BannerSwiper';
import CardItem from '../../components/DynamicCard/CardItem';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet><title>Camping Retreats || Home</title></Helmet>
            <BannerSwiper />
            <CardItem />
        </div>
    );
};

export default Home;