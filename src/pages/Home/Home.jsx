import CategorySwiper from "../../components/CategorySwiper/CategorySwiper";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeBistroBossSection from "../../components/HomeBistroBossSection/HomeBistroBossSection";
import PopularMenu from "../../components/PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <CategorySwiper/>
            <HomeBistroBossSection/>
            <PopularMenu/>
        </div>
    );
};

export default Home;