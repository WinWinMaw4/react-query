import useSuperHeroesData from "../hooks/useSuperHeroesData"
import NavBar from "./layout/NavBar"


const RQSuperHeroes = () => {


const onSuccess = (data) => {
  console.log("Perform side effect after data fetching",data)
}

const onError = (error) => {
  console.log("Perform side effect after encountering error",error)
}

const {isLoading, data, isError, error, isFetching, refetch} = useSuperHeroesData(onSuccess, onError);

console.log({isLoading,isFetching})

if(isLoading || isFetching) return <h2>Loading...</h2>
if(isError) return <h2>{error.message}</h2>

  return (
    <>
    <NavBar />
    <section>
      <h2 className="text-xl font-bold">RQ Super Heroes</h2>
      <button onClick={refetch} className="bg-red-600/50 border border-red-600 border-spacing-6 px-2 py-1 text-black"> fetch heroes</button>
      {/* {data?.data.map((hero)=>{
        return <div key={hero.id}>{hero.name}</div>
      })}       */}
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>
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