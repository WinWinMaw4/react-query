import { Route, Routes } from 'react-router-dom'
import Home from "./Home.page"
import SupreHeroes from "./SupreHeroes.page"
import RQSuperHeroes from "./RQSuperHeroes.page"
import Error404 from './layout/Error404.page'

const AppRoute = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/superheroes" element={<SupreHeroes />} />
    <Route path="/rqsuperheroes" element={<RQSuperHeroes />} />
    <Route path="*" element={<Error404 />} />

  </Routes>
  )
}

export default AppRoute