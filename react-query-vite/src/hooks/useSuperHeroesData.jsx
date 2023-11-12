import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroesData = () =>{
    return axios.get('http://localhost:4000/superheroes')
  }
  
const useSuperHeroesData = (onSuccess, onError) => {
   return useQuery(
        'super-heroes',
        fetchSuperHeroesData,
        {
          onSuccess,
          onError,
          select: (data) => {
            const superHeroNames = data.data.map(hero => hero.name)
            return superHeroNames
          }
        }
        )
}

export default useSuperHeroesData