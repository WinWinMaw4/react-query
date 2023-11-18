import axios from "axios"
import { useQuery } from "react-query"
import NavBar from "./layout/NavBar"
import { useState } from "react"

const fetchColors = (pageNumber) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

const PaginatedQueriesPage = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const {isLoading, isError, error, data, isFetching} = useQuery(
        ['colors',pageNumber], 
        ()=>fetchColors(pageNumber),
        {
            keepPreviousData:true,
        }
    )

 
  return (
    <>
    <NavBar />
        {isFetching && <h2>Loading .....</h2>}
        {isError && <h2>{error.message}</h2>}
        {data?.data.map((color)=>{
            return (
                <div key={color.id}><h2>{color.label}</h2></div>
            )
        })}
        <div>
            <button onClick={()=> setPageNumber(page => page - 1)} disabled={pageNumber === 1}>Prev Page</button>
            <button onClick={()=> setPageNumber(page => page + 1)} disabled={pageNumber === 4}>Next Page</button>
        </div>
        
        
    </>
  )
}

export default PaginatedQueriesPage