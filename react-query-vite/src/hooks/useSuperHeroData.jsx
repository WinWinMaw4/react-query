import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroeData = ({queryKey}) =>{
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
  }
  
const useSuperHeroData = (onSuccess, onError, heroId) => {
   return useQuery(
        ['super-heroes',heroId],
        fetchSuperHeroeData,
        {
          onSuccess,
          onError,
          // select: (data) => {
          //   const superHeroNames = data.data.map(hero => hero.name)
          //   return superHeroNames
          // }
        }
        )
}

export default useSuperHeroData