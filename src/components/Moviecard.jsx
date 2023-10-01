import React from "react";
import { Link } from "react-router-dom";
import th from "../images/th.jpg";

function Moviecard({ movie }) {
  const { id, title, poster_path } = movie;
  const image = poster_path
    ? ` https://image.tmdb.org/t/p/w500/${poster_path}`
    : { th };
  return (
    <div className="cardmain lg:w-[350px] lg:h-[600px]  w-[330px] h-[500px] mt-1 ml-1 lg:ml-28 lg:mt-16  bg-gray-900 rounded flex flex-col border-2 border-black dark:border-none  overflow-hidden">
      <Link to={`/movie/${id}`}>
        <div className="img h-[80%] w-[100%] ">
          <img src={image} alt="pic" className="h-[500px] w-[350px] " />
        </div>
      </Link>
      <div className="cont w-[100%] h-[40%]">
        <h1 className="text-white font-bold text-2xl text-center">{title}</h1>
      </div>
    </div>
  );
}

export default Moviecard;
