import React from "react";
import useFetch from "../hooks/useFetch";
import Moviecard from "./Moviecard";
import { useSearchParams } from "react-router-dom";

function Search({ apipath }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { data: movies } = useFetch(apipath, query);
  return (
    <>
      <main>
        <div className="p">
          <p className="text-xl font-semibold text-black dark:text-white  py-2 text-center">
            {movies.length === 0
              ? `No Results For ${query}`
              : ` Results For ${query}`}
          </p>
        </div>
        <div className="movies max-w-max ml-2">
          <div className="card grid grid-cols-1 lg:grid-cols-3 gap-3">
            {movies &&
              movies.map((movie) => <Moviecard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </main>
    </>
  );
}

export default Search;
