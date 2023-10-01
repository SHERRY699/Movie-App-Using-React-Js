import  { useState ,useEffect} from 'react'



function useFetch(apipath,query="") {
    const [data,setdata]=useState([]);
    const  url= `https://api.themoviedb.org/3/${apipath}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const dat = await response.json();
            setdata(dat.results)
          } catch (error) {
            console.error("Error fetching movies:", error);
          }
        };
    
        fetchData();
      }, [url]);
  return {data}
}

export default useFetch;

