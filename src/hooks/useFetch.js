import { useEffect, useState } from 'react'

const useFetch = (fn = () => {}, params, observable = [], condition = true) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [refreshCounter, setRefreshCounter] = useState(0)

  const refresh = () => {
    setRefreshCounter(refreshCounter + 1)
  }

  useEffect(() => {
    if (condition) {
      setIsLoading(true)
      fn(params)
        .then((data) => {
          setResponse(data)
          setIsLoading(false)
        })
        .catch((error) => {
          setError(error)
          setIsLoading(false)
        })
    }
  }, [refreshCounter, condition, ...observable])

  return { response, error, isLoading, refresh }
}

export default useFetch
