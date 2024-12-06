import { Helmet } from "react-helmet-async";
import { FaHome,FaCalendarAlt,FaShoppingCart, FaShoppingBag  } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdHome, MdOutlinePayment,MdRateReview } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Dashboard</title>
            </Helmet>
            <div className="flex gap-6">
                <div>
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="  p-4 drawer-button lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="py-8 px-4 menu bg-[#D1A054] text-black text-base-content min-h-full w-80 p-4">
                                <Link to="/" className="btn btn-ghost text-xl mb-10">
                                    <span className="font-cinzel">
                                        <h2 className="tracking-widest">BISTRO BOSS</h2>
                                        <h3 className="tracking-widest text-sm">Restaurant</h3>
                                    </span>
                                </Link>
                                <ul className="mb-4">
                                    {/* Sidebar content here */}
                                    <li><NavLink to={`/dashboard`} className="uppercase"><FaHome/> User Home</NavLink></li>
                                    <li><NavLink to={`/dashboard/reservation`} className="uppercase"><FaCalendarAlt /> Reservation</NavLink></li>
                                    <li><NavLink to={`/dashboard/payment-history`} className="uppercase"><MdOutlinePayment/> Payment History</NavLink></li>
                                    <li><NavLink to={`/dashboard/cart`} className="uppercase"><FaShoppingCart /> My Cart</NavLink></li>
                                    <li><NavLink to={`/dashboard/add-review`} className="uppercase"> <MdRateReview /> Add Review</NavLink></li>
                                    <li><NavLink to={`/dashboard/booking`} className="uppercase"><RiCalendarScheduleFill /> My Booking</NavLink></li>
                                    
                                </ul>
                                <ul className="border-t-2 pt-4">
                                    {/* Sidebar content here */}
                                    <li><NavLink to={`/`} className="uppercase"><MdHome/> Home</NavLink></li>
                                    <li><NavLink to={`/menu`} className="uppercase"><GiHamburgerMenu /> Menu</NavLink></li>
                                    <li><NavLink to={`/shop`} className="uppercase"><FaShoppingBag />Shop</NavLink></li>
                                    <li><NavLink to={`/contact`} className="uppercase"><FaMessage />Contact</NavLink></li>
                                    
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="  p-4">
                    content
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;