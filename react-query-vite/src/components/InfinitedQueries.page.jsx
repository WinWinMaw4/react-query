import axios from "axios"
import { useInfiniteQuery } from "react-query"
import NavBar from "./layout/NavBar"
import { Fragment, useState } from "react"

const fetchColors = ({pageParam = 1}) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

const InfinitedQueriesPage = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const {isLoading, isError, error, data, hasNextPage, fetchNextPage, isFetching , isFetchingNextPage} = useInfiniteQuery(
        ['colors'], 
        fetchColors,
        {
            getNextPageParam: (_lastPage, pages) => {
                if(pages.length < 4){
                    return pages.length + 1
                } else {
                    return undefined
                }
            }
        }
    )

 
  return (
    <>
    <NavBar />
        {/* {isFetching && <h2>Loading .....</h2>} */}
        {isError && <h2>{error.message}</h2>}
        {data?.pages.map((group, i)=>{
            return (
                <Fragment key={i}>
                    {
                      group.data.map(color => (
                        <div key={color.id}><h2 className="text-2xl">{color.id}. {color.label}</h2></div>
                      ))
                    }
                </Fragment>
            )
        })}
        <div>
            <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
        </div>
        <div>
            {isFetching && !isFetchingNextPage ? "Fetching..." : null}
        </div>

        
        
    </>
  )
}

export default InfinitedQueriesPage