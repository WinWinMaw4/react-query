import NavBar from "./layout/NavBar"
import useSuperHeroData from "../hooks/useSuperHeroData"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}
const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

const ParallelQueries = () => {

  const {data:superHeroes} =  useQuery('super-heroes',fetchSuperHeroes)
  const {data:friends} =   useQuery('friends',fetchFriends)

   
  return (
    <>
    <NavBar />
    <section>
      <h2 className="text-xl font-bold">RQ Parallel</h2>
      
    </section>

    </>
  )
}

export default ParallelQueries