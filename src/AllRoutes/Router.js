import React from 'react'
import {Route,Routes} from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import Search from '../components/Search';
import   Movielist from '../components/Movielist';



function Router() {
  return (
    <>
    <main className='dark:bg-slate-800'>
    <Routes>
        <Route path='/' element={<Movielist  apipath={'movie/now_playing'}  />}/>
        <Route path='movie/:id' element={<MovieDetails/>}/>
        <Route path='movies/popular' element={<Movielist apipath={'movie/popular'}/>}/>
        <Route path='search' element={<Search apipath={'search/movie'}/>}/>
        <Route path='movies/top' element={<Movielist apipath={'movie/top_rated'}/>}/>
        <Route path='movies/upcoming' element={<Movielist apipath={'movie/upcoming'}/>}/>
    </Routes>
    </main>
    
    
    
    </>
  )
}

export default Router;

