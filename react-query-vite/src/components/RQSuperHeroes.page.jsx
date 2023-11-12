import { useQuery } from "react-query"
import NavBar from "./layout/NavBar"
import axios from "axios"

const fetchSuperHeroesData = () =>{
  return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroes = () => {

const onHandleSuccess = (data) => {
  console.log("Perform side effect after data fetching",data)
}

const onHandleError = (error) => {
  console.log("Perform side effect after encountering error",error)
}

const {isLoading, data, isError, error, isFetching, refetch} = useQuery(
  'super-heroes',
  fetchSuperHeroesData,
  {
    onSuccess:onHandleSuccess,
    onError:onHandleError
  }
  )

console.log({isLoading,isFetching})

if(isLoading || isFetching) return <h2>Loading...</h2>
if(isError) return <h2>{error.message}</h2>

  return (
    <>
    <NavBar />
    <section>
      <h2 className="text-xl font-bold">RQ Super Heroes</h2>
      <button onClick={refetch} className="bg-red-600/50 border border-red-600 border-spacing-6 px-2 py-1 text-black"> fetch heroes</button>
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