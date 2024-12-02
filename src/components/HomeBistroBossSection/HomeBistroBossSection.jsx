
import bgImg from "../../assets/home/chef-service.jpg"

const HomeBistroBossSection = () => {
    return (
        <div className={`max-w-7xl mx-auto relative mb-24`}>
            <div>
                <img src={bgImg} alt="" />
            </div>
            <div className="absolute top-24 left-24 right-24 bg-white p-20 text-center space-y-4">
            <h2 className="text-4xl uppercase">Bistro Boss</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
            
        </div>
    );
};

export default HomeBistroBossSection;