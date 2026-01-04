import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchFromTMDB } from "../api/tmbd"
import MovieCard from "./MovieCard"

const SearchResults = () => {
  const { query } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const loadResults = async () => {
      const data = await fetchFromTMDB("search/movie", { query })
      setMovies(data.results || [])
    }
    loadResults()
  }, [query])

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6">
        Search results for "{query}"
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default SearchResults
