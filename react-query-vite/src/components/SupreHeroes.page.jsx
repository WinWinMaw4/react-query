import { useEffect, useState } from "react"
import NavBar from "./layout/NavBar"
import axios from "axios";

const SupreHeroes= () => {
  const [isLoading,setIsLoading] = useState(true);
  const [data,setData] = useState("");

  useEffect(()=>{
    axios.get('http://localhost:4000/superheroes').then((res)=>{
      setData(res.data)
      setIsLoading(false)
    })
  },[])

  if(isLoading){
    return <h2>Loading....</h2>
  }
  return (
    <>
    <NavBar />
    <div>
      <h2 className="text-xl font-bold">Super Heroes Page</h2>
      {data.map((hero)=>{
        return <div key={hero.id}>{hero.name}</div>
      })}
    </div>
    </>
  )
}

export default SupreHeroes