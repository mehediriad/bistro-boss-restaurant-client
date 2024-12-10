import { Link } from "react-router-dom";
import errorImg from "../../assets/404.gif"
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="w-1/2 mx-auto min-h-screen">
            <div>
                <img src={errorImg} alt="" />
            </div>
            <div>
                <Link>
                    <button className="text-center text-white flex justify-center items-center btn bg-[#835D23]">Back to Home<FaHome /></button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;