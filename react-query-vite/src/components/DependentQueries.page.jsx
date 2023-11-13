import axios from "axios"
import { useQuery } from "react-query"

const fetchUserByEmail = (email) =>{
    return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchCoursesByChannelId = (channelId) =>{
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

const DependentQueries = ({email}) => {
    const {data:user} = useQuery(['user',email], ()=>fetchUserByEmail(email))
    const channelId = user?.data.channelId
    const {data:courses} = useQuery(['courses',channelId], ()=>fetchCoursesByChannelId(channelId),{enabled: !!channelId})

  return (
    <>
     <h1>Courses</h1>
     <h3 className="text-xl underline">{courses?.data?.id}</h3>
      {courses?.data?.courses?.map((course, index) => (
        <div key={index}>
          <ul>
            <li>{course}</li>
          </ul>
        </div>
      ))}
    </>
  )
}

export default DependentQueries