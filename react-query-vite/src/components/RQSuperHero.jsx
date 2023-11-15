import NavBar from "./layout/NavBar"
import useSuperHeroData from "../hooks/useSuperHeroData"
import { useParams } from "react-router-dom"


const RQSuperHero = () => {

    const {heroId} = useParams();


const {isLoading, data, isError, error, isFetching} = useSuperHeroData(heroId);

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