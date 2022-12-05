import axios from "axios"
import { useEffect, useState } from "react"

export default function useFetch(url) {
  
  const [ data, setData ] = useState(null)
  const [ postsQuantity, setPostsQuantity ] = useState(0)
  const [ isFetching, setIsFetching ] = useState(true)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    
    axios.get(url)
      .then(response => {
        setData(response.data)
        setPostsQuantity(response.data.length)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setIsFetching(false)
      })

  }, [])

  return { data, isFetching, postsQuantity }

}