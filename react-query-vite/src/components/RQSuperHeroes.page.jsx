import { useQuery } from "react-query"
import NavBar from "./layout/NavBar"
import axios from "axios"

const fetchSuperHeroesData = () =>{
  return axios.get('http://localhost:4000/superheroes1')
}

const RQSuperHeroes = () => {
const {isLoading, data, isError, error} = useQuery('super-heroes',fetchSuperHeroesData)

if(isLoading) return <h2>Loading...</h2>
if(isError) return <h2>{error.message}</h2>

  return (
    <>
    <NavBar />
    <section>
      <h2 className="text-xl font-bold">RQ Super Heroes</h2>
      {data?.data.map((hero)=>{
        return <div key={hero.id}>{hero.name}</div>
      })}      
    </section>
    </>
  )
}


// function fetchData(){
//   const {isLoading, error, data} = useQuery('superHeroesData',()=> 
//     fetch('http://localhost:4000/superheroes').then(res=>
//     res.json())
//   )
//   if (isLoading) return 'Loading...'

//   if (error) return 'An error has occurred: ' + error.message
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{' '}
//       <strong>✨ {data.stargazers_count}</strong>{' '}
//       <strong>🍴 {data.forks_count}</strong>
//     </div>
//   )
// }

export default RQSuperHeroes