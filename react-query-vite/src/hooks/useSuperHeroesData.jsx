import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

const fetchSuperHeroesData = () =>{
    return axios.get('http://localhost:4000/superheroes')
  }
  
  const addSuperHero = (hero) =>{
    return axios.post('http://localhost:4000/superheroes', hero)
  }

export const useSuperHeroesData = (onSuccess, onError) => {
   return useQuery(
        'super-heroes',
        fetchSuperHeroesData,
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

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero,{
    onSuccess: (data) => {
      // queryClient.invalidateQueries('super-heroes')

      queryClient.setQueriesData('super-heroes', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data]
        }
      })

    }
  })
}