import NavBar from "./layout/NavBar"
import axios from "axios"
import { useQueries } from "react-query"

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const DynamicParallel = ({heroIds}) => {
   const queryResults = useQueries(
    heroIds.map((id)=>{
        return {
            queryKey: ['super-hero',id],
            queryFn: () => fetchSuperHero(id),
        }
    })
   )
   console.log({queryResults});
  return (
    <>
    <NavBar />
    <section>
      <h2 className="text-xl font-bold">Dynamic Parallel Page</h2>
      
    </section>

    </>
  )
}

export default DynamicParallel