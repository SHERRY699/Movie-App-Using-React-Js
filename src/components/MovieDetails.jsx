import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
function MovieDetails() {
  const params = useParams();
  const [data, setdata] = useState([]);
  const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  useEffect(() => {
    const saleem = async () => {
      try {
        const a = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const b = await a.json();
        setdata(b);
        console.log(b);
      } catch (error) {
        console.error(error.message);
      }
    };
    saleem();
  }, [params]);
  return (
    <>
      <div className="details w-max-7xl lg:w-screen lg:h-screen   lg:flex items-center justify-between ">
        <div className="divimage lg:w-[50%] w-screen flex items-center justify-center">
          <img
            src={image}
            alt="img"
            className="w-[200px] h-[300px]    lg:w-[400px] lg:h-[500px] mt-2 lg:mb-20"
          />
        </div>
        <div className="con flex flex-col lg:w-[50%] w-screen lg:gap-6 gap-4 lg:mb-20">
          <h1 className="dark:text-white text-black font-bold text-4xl mt-1">
            {data.original_title}
          </h1>
          <p className="text-justify dark:text-gray-400 text-black mr-5  lg:mr-10">
            {data.overview}
          </p>
          <p>
            {data.genres
              ? data.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="mr-2 border border-gray-200 rounded dark:bg-gray-600 p-2 hidden lg:inline"
                  >
                    {genre.name}
                  </span>
                ))
              : ""}
          </p>
          <p className="dark:text-white text-black font-bold">
            Runtime: <span className="text-gray-400">{data.runtime}</span>
          </p>
          <p className="dark:text-white text-black font-bold">
            Popularity: <span className="text-gray-400">{data.popularity}</span>
          </p>
          <p className="dark:text-white text-black font-bold">
            Budget: <span className="text-gray-400">{data.budget}</span>
          </p>
          <p className="dark:text-white text-black font-bold">
            Revenue: <span className="text-gray-400">{data.revenue}</span>
          </p>
          <p className="dark:text-white text-black font-bold">
            Release Date :{" "}
            <span className="text-gray-400">{data.release_date}</span>
          </p>
          <p className="dark:text-white text-black font-bold">
            IMDB:{" "}
            <a
              href={`https://www.imdb.com/title/${data.imdb_id}`}
              className="text-gray-400"
            >
              {data.imdb_id}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
