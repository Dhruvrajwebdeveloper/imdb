import Image from 'next/image'
import Results from '../components/Results';
const API_KEY=process.env.API_KEY;
export default async function Home({searchParams}) {
 
  const genre = searchParams.genre||'fetchTrending';
  // const res = await fetch(`https://api.themoviedb.org/3/movie/${genre === 'fetchTopRated'?
  //            "movie/top_rated":
  //           'upcoming'}
  //           ?api_key=${API_KEY}&language=en-US
  //           &page=1`,{next:{revalidate:10000}});
  // const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=2466b871beeca8171058a5ce5b1d7c7f  `)
  
let res ; 
{
    genre === 'fetchTopRated'?
    res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=2466b871beeca8171058a5ce5b1d7c7f`,{next:{revalidate:10000}}):
    res =  await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=2466b871beeca8171058a5ce5b1d7c7f`,{next:{revalidate:10000}})
}

  if(!res.ok){
    throw new Error("Error in page.jsx in fetching data");
  }

  const data  = await res.json();
  const results = data.results;
  // console.log(results);
  // console.log("hello");
  return (
    <div>
      <Results results={results}/>

      
    </div>
  )
}
