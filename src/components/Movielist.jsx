import Moviecard from "./Moviecard";
import useFetch from "../hooks/useFetch";

function Movielist({ apipath }) {
  const { data: movies, isLoading, error } = useFetch(apipath);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="movies max-w-7xl ml-2">
        <div className="card grid grid-cols-1 lg:grid-cols-3 gap-3">
          {movies &&
            movies.map((movie) => <Moviecard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </main>
  );
}

export default Movielist;
