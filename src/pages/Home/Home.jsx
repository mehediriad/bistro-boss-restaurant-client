import CategorySwiper from "../../components/CategorySwiper/CategorySwiper";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeBistroBossSection from "../../components/HomeBistroBossSection/HomeBistroBossSection";


const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <CategorySwiper/>
            <HomeBistroBossSection/>
        </div>
    );
};

export default Home;