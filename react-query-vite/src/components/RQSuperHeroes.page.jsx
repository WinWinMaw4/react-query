import { Link } from "react-router-dom"
import {useSuperHeroesData, useAddSuperHeroData } from "../hooks/useSuperHeroesData"
import NavBar from "./layout/NavBar"
import { useState } from "react";


const RQSuperHeroes = () => {
const [name, setName] = useState('');
const [alterEgo, setAlterEgo] = useState('');

const onSuccess = (data) => {
  console.log("Perform side effect after data fetching",data)
}

const onError = (error) => {
  console.log("Perform side effect after encountering error",error)
}

const {isLoading, data, isError, error, isFetching, refetch} = useSuperHeroesData(onSuccess, onError);

const {mutate: addHero} = useAddSuperHeroData()
const handleAddHeroClick = () =>{
  const hero = {name, alterEgo}
  addHero(hero)
  setName("")
  setAlterEgo("")
}
// if(isLoading || isFetching) return <h2>Loading...</h2>
// if(isError) return <h2>{error.message}</h2>
// if(data) return console.log(data.data);
  return (
    <>
    <NavBar />
    <section>
      <h2 className="text-xl font-bold">RQ Super Heroes</h2>
      <section className="my-2">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className="me-3 text-black" />
        <input type="text" value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} className="me-3 text-black" />
        <button onClick={handleAddHeroClick} className="bg-red-400 text-black px-3">Add Hero</button>
      </section>

      <button onClick={refetch} className="bg-red-600/50 border border-red-600 border-spacing-6 px-2 py-1 text-black"> fetch heroes</button>
      {data?.data.map((hero)=>{
        return <div key={hero.id}>
          <Link to={`/rqsuperhero/${hero.id}`}>{hero.name}</Link>
          </div>
      })}      
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>
      })} */}
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