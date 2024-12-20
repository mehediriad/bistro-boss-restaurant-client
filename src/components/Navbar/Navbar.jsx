import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";


const Navbar = () => {
    const { user, logOut } = useAuth()
    const [cart] = useCart()
    const [admin] = useAdmin()
    const totalPrice = cart.reduce((total, current) => total + parseInt(current.price), 0)

    const links = <>
        <li><NavLink to={`/`}>Home</NavLink></li>
        <li><NavLink to={`/contact`}>Contact</NavLink></li>
        <li><NavLink to={`/menu`}>Menu</NavLink></li>
        <li><NavLink to={`/shop`}>Shop</NavLink></li>
        {user && admin ? <li><NavLink to={`/dashboard/admin-home`}>Dashboard</NavLink></li> : ""}
        {user && !admin ?<li><NavLink to={`/dashboard/user-home`}>Dashboard</NavLink></li>  : ""}

        {/* {user && <li><NavLink to={`/dashboard/user-home`}>Dashboard</NavLink></li>} */}


    </>

    const handleLogOut = e => {
        e.preventDefault()
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are now Logged Out!!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => {
                // An error happened.
            });
    }
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
                        <Link to="/" className="btn btn-ghost text-xl">
                            <span className="font-cinzel">
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
                        {user ? <div className="flex-none">
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
                                        <span className="badge badge-sm indicator-item">{cart.length}</span>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                    <div className="card-body">
                                        <span className="text-lg font-bold text-white">{cart.length} Items</span>
                                        <span className="text-info">Total: ${totalPrice}</span>
                                        <div className="card-actions">
                                            <Link to={`dashboard/cart`}>
                                                <button className="btn btn-primary btn-block">View cart</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ""}

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

                        {user ? "" : <Link to="/login"><button className="btn btn-outline btn-warning">Login</button></Link>}

                        {user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={"https://i.ibb.co.com/pnkRJw1/user.png"} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="bg-base-300 menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">{user?.displayName || user?.email}</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div> : ""}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;