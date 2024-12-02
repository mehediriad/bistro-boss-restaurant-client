import CallUs from "../../components/CallUs/CallUs";
import CategorySwiper from "../../components/CategorySwiper/CategorySwiper";
import ChefRecommends from "../../components/ChefRecommends/ChefRecommends";
import FromOurMenu from "../../components/FromOurMenu/FromOurMenu";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeBistroBossSection from "../../components/HomeBistroBossSection/HomeBistroBossSection";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <HomeBanner/>
            <CategorySwiper/>
            <HomeBistroBossSection/>
            <PopularMenu/>
            <CallUs/>
            <ChefRecommends/>
            <FromOurMenu/>
            <Testimonials/>
        </div>
    );
};

export default Home;