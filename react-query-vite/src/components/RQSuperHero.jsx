import NavBar from "./layout/NavBar"
import useSuperHeroData from "../hooks/useSuperHeroData"
import { useParams } from "react-router-dom"


const RQSuperHero = () => {

    const {heroId} = useParams();


const onSuccess = (data) => {
  console.log("Perform side effect after data fetching",data)
}

const onError = (error) => {
  console.log("Perform side effect after encountering error",error)
}

const {isLoading, data, isError, error, isFetching} = useSuperHeroData(onSuccess, onError, heroId);

console.log({isLoading,isFetching})

if(isLoading || isFetching) return <h2>Loading...</h2>
if(isError) return <h2>{error.message}</h2>
// if(data) return console.log(data.data);
  return (
    <>
    <NavBar />
    <section>
      <h2 className="text-xl font-bold">RQ Super Hero</h2>
      {data?.data.name}- {data?.data.alterEgo}
    </section>

    </>
  )
}

export default RQSuperHero