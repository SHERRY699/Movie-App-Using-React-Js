import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faS } from "@fortawesome/free-solid-svg-icons";

function Header({ dark, setdark }) {
  const [hidden, sethidden] = useState(true);
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    e.target.reset();
    return navigate(`/search?q=${query}`);
  };

  return (
    <>
      <div className="nav w-screen h-24  relative  bg-white text-black dark:text-white border-b-2 border-black  dark:bg-gray-900 flex justify-evenly  lg:justify-between">
        <Link to={"/"}>
          <div className="logo w-[20%] h-[100%] flex items-center">
            <FontAwesomeIcon icon={faS} className="ml-4" />
            <h1 className="dark:text-white font-bold ml-2 text-black">
              SHERRYMATE
            </h1>
          </div>
        </Link>

        <button
          className=" lg:hidden md:hidden ml-24"
          onClick={() => {
            setdark(!dark);
          }}
        >
          {dark ? "💡" : "🌙"}
        </button>

        <div className="links  hidden lg:flex md:flex w-[40%] h-[100%] dark:text-gray-200 text-black  items-center justify-between  ">
          <Link
            to="/"
            className="hover:border-b-2 hover:border-black hover:dark:border-b-2 hover:dark:border-gray-200"
          >
            Home
          </Link>
          <Link
            to="/movies/popular"
            className="hover:border-b-2 hover:border-black hover:dark:border-b-2 hover:dark:border-gray-200"
          >
            Popular
          </Link>
          <Link
            to="/movies/upcoming"
            className="hover:border-b-2 hover:border-black hover:dark:border-b-2 hover:dark:border-gray-200"
          >
            Upcoming
          </Link>
          <Link
            to="/movies/top"
            className="hover:border-b-2 hover:border-black hover:dark:border-b-2 hover:dark:border-gray-200"
          >
            Top Rated
          </Link>
        </div>

        <div className="linkm mt-8 ml-20 text-2xl lg:hidden md:hidden ">
          <button
            onClick={() => {
              sethidden(!hidden);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="search w-[30%] h-[100%]  hidden lg:flex items-center justify-evenly">
          <button
            className="hidden lg:block"
            onClick={() => {
              setdark(!dark);
            }}
          >
            {dark ? "💡" : "🌙"}
          </button>
          <form onSubmit={handlesubmit}>
            <input
              type="search"
              name="search"
              className="lg:w-[300px] w-[250px]  h-10 rounded-none lg:rounded-xl lg:bg-gray-100 text-black"
            />
          </form>
        </div>
      </div>

      <div
        className={`${
          hidden ? "hidden" : ""
        } hdiv absolute flex pt-2 flex-col text-white items-center h-36 top-16  w-[380px] rounded bg-slate-800`}
      >
        <form onSubmit={handlesubmit}>
          <input
            type="search"
            name="search"
            className="lg:w-[300px] w-[250px]  h-10 rounded-none lg:rounded-xl lg:bg-gray-100 text-black"
          />
        </form>
        <Link to="/">Home</Link>
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/upcoming">Upcoming</Link>
        <Link to="/movies/top">Top Rated</Link>
      </div>
    </>
  );
}

export default Header;
