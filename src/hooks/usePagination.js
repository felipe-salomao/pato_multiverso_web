import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import qs from 'qs'

const usePagination = (initialPerPage) => {
  const search = qs.parse(location.search)
  const navigate = useNavigate()
  const searchPage = search?.page
  const page = parseInt(searchPage) || 1

  const [query, setQuery] = useState({ page, ...search })
  const [perPage, setPerPage] = useState(initialPerPage)

  const handleChangePage = (newPage) => {
    setQuery({ ...search, page: newPage + 1 })
  }

  const handleChangeRowsPerPage = (event) => {
    setPerPage(parseInt(event.target.value, 10))
    handleChangePage(0)
  }

  useEffect(() => {
    navigate(location.pathname + '?' + qs.stringify(query))
  }, [location.pathname, query])

  return { page, perPage, handleChangePage, handleChangeRowsPerPage }
}

export default usePagination
