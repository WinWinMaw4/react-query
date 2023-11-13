import { Route, Routes } from 'react-router-dom'
import Home from "./Home.page"
import SupreHeroes from "./SupreHeroes.page"
import RQSuperHeroes from "./RQSuperHeroes.page"
import Error404 from './layout/Error404.page'
import RQSuperHero from './RQSuperHero'
import ParallelQueries from './ParallelQueries.page'
import DynamicParallel from './DynamicParallel.page'
import DependentQueries from './DependentQueries.page'

const AppRoute = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/superheroes" element={<SupreHeroes />} />
    <Route path="/rqsuperheroes" element={<RQSuperHeroes />} />
    <Route path='/rqsuperhero/:heroId' element={<RQSuperHero />} />
    <Route path="/rqparallel" element={<ParallelQueries />} />
    <Route path="/rqdynamicparallel" element={<DynamicParallel heroIds={[1,3]} />} />
    <Route path="/rqdependent" element={<DependentQueries email='mawinwinmaw4@gmail.com' />} />


    <Route path="*" element={<Error404 />} />

  </Routes>
  )
}

export default AppRoute