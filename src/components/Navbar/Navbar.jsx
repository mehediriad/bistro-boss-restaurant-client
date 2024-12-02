import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"


const Navbar = () => {
    const links = <>
        <li><NavLink to={`/`}>Home</NavLink></li>
        <li><NavLink to={`/about`}>About</NavLink></li>
        <li><NavLink to={`/services`}>Service</NavLink></li>
        <li><NavLink to={`/blogs`}>Blog</NavLink></li>
        <li><NavLink to={`/contact`}>Contact</NavLink></li>


    </>
    return (
        <div className="fixed z-10 text-white w-full">
            <div>
                <div className="navbar bg-black bg-opacity-30">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <Link className="btn btn-ghost text-xl">
                            <span>
                            <h2 className="tracking-widest">BISTRO BOSS</h2>
                            <h3 className="tracking-widest text-sm">Restaurant</h3>
                            </span> 
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
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
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                    <div className="card-body">
                                        <span className="text-lg font-bold text-white">8 Items</span>
                                        <span className="text-info">Subtotal: $112</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-ghost btn-circle">
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
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* <button className="btn btn-outline btn-warning">Appointment</button> */}

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={"https://i.ibb.co.com/pnkRJw1/user.png"} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="bg-white menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">Mehedi</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><button>Logout</button></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;