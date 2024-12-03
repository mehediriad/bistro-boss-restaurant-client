import { Parallax } from 'react-parallax';


const Cover = ({ coverImg,title,subTitle,titleClass, subTitleClass }) => {
    
    
    return (
        <div className='mb-20'>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={coverImg}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero min-h-[600px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-white text-center">
                        <div className="max-w-md">
                            <h1 className={`mb-5 font-bold font-cinzel uppercase ${titleClass}`}>{title}</h1>
                            <p className={`mb-5 font-inter uppercase ${subTitleClass}`}>{subTitle}</p>
                            
                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default Cover;