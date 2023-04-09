import React from "react";
import logo from "../../../public/mealdb-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-transparent md:w-3/4 md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to={"/"} className="pl-4">
                <p>Home</p>
              </Link>
              <li tabIndex={0} className="mx-4">
                <p className="justify-between">
                  Category
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </p>
                <ul className="p-2">
                  <li>
                    <p>Vegetarian</p>
                  </li>
                  <li>
                    <p>Non-Vegetarian</p>
                  </li>
                </ul>
              </li>
              <Link to={"/about"} className="pl-4">
                <p>About us</p>
              </Link>
              <li className="rounded-lg bg-[#7ff485] mx-auto mt-4">
                <p className="">Login/Signup</p>
              </li>
            </ul>
          </div>
          <p className="normal-case md:text-xl">
            <img src={logo} alt="" className="md:w-3/6 " />
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              <p className="px-6 py-1 rounded-lg">Home</p>
            </NavLink>
            <li tabIndex={0} className="z-10">
              <p>
                Category
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </p>
              <ul className="p-2">
                <li className="bg-slate-100">
                  <p>Vegetarian</p>
                </li>
                <li className="bg-slate-100">
                  <p>Non-Vegetarian</p>
                </li>
              </ul>
            </li>
            <NavLink
              to={"/about"}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              <p className="px-6 py-1 rounded-lg">About us</p>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end hidden md:grid">
          <p className="btn btn-accent">Login/Signup</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
