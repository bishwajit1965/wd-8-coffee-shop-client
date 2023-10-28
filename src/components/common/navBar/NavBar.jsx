import "./NavBar.css";

import {
  FaBars,
  FaSignInAlt,
  FaSignOutAlt,
  FaTimes,
  FaUserFriends,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../../../providers/AuthProvider";
import Logo from "../../../assets/images/more/logo1.png";

const NavBar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const routes = [
    { id: 1, route: "/", name: "Home" },
    { id: 2, route: "/about-us", name: "About Us" },
    { id: 3, route: "/contact-us", name: "Contact" },
    { id: 4, route: "/add-coffee", name: "Add Coffee" },
    { id: 5, route: "/add-gallery", name: "Add Gallery" },
  ];

  const handleLogOut = () => {
    handleSignOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="navbar md:py-1 py-0 lg:px-28 md:px-2 lg:bg-base-200 bg-base-200 shadow-lg px-0 sticky top-0">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <div
                  className="md:hidden text-2xl dropdown"
                  onClick={() => handleOpen(setOpen(!open))}
                >
                  {open === true ? (
                    <FaTimes className="w-7 h-7 border-2 border-slate-300 p-1 rounded-sm" />
                  ) : (
                    <FaBars className="w-7 h-7  border-2 border-slate-300 p-1 rounded-sm" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className={`bg-base-200 border lg:hidden md:hidden mt-3 lg:ml-0 -ml-4 py-2 space-y-1 z-[1] shadow-lg w-56 absolute duration-1000 md:static rounded-b-md ${
                  open ? "top-[49px]" : "-top-60"
                } `}
              >
                {routes.map((route) => (
                  <li key={route.id} className="">
                    <NavLink
                      to={route.route}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      {route.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <img src={Logo} alt="Logo" className="lg:w-14 lg:h-14 h-8 w-8" />
            <Link to="/" className="ml-0">
              <span className="xl:text-xl xl:w-48 md:w-32 lg:block xl:block lg:text-xs md:hidden md:ml-0 hidden lg:font-bold text-red-600">
                Coffee Shop
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden md:block lg:flex">
            <ul className="menu-horizontal">
              {routes.map((route) => (
                <li key={route.id} className="">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to={route.route}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="btn m-1">
                <div className="flex items-center lg:w- w-">
                  {user ? (
                    user.photoURL ? (
                      <>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs capitalize">
                            {user ? user.displayName : " "}
                          </span>
                          <img
                            src={user.photoURL}
                            alt="Profile pic"
                            className="lg:w-10 lg:h-10 w-8 h-8 p-1 border-2 border-slate-300 rounded-full shadow-lg"
                          />
                        </div>
                      </>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] p-2 mt-3 shadow bg-base-100 rounded-md w-56 space-y-2"
              >
                {user ? (
                  <>
                    <li className="text-xs capitalize bg-base-200 rounded-md p-1">
                      Name: {user?.displayName}
                    </li>
                    <li className="text-xs bg-base-200 rounded-sm p-1">
                      Email: {user?.email}
                    </li>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </div>
            <div className="flex justify-end items-center">
              {user ? (
                <button
                  className="btn btn-sm bg-red-500 text-white w-9 lg:w-24 capitalize"
                  onClick={handleLogOut}
                >
                  <FaSignOutAlt />
                  <span className="hidden lg:block">Logout</span>
                </button>
              ) : (
                <>
                  <NavLink to="/login" className="flex items-center">
                    <FaSignInAlt className="mr-1" />
                    <span className="hidden md:block">Login</span>
                  </NavLink>
                  <NavLink to="/register" className="flex items-center">
                    <FaUserFriends className="mr-1" />
                    <span className="hidden md:block">Register</span>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
