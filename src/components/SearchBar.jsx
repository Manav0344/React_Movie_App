import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchFromTMDB, imageURL } from "../api/tmbd"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const timer = setTimeout(async () => {
      const data = await fetchFromTMDB("search/movie", { query })
      setResults(data.results?.slice(0, 4) || [])
    }, 400)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-gray-800 px-3 py-1 rounded-md w-64"
      />

      {results.length > 0 && (
        <ul className="absolute right-0 mt-2 bg-gray-700 rounded-md w-72 z-50">
          {results.map(movie => (
            <li
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-600 cursor-pointer"
            >
              <img
                src={imageURL(movie.poster_path, "w92")}
                className="w-10 rounded"
                alt={movie.title}
              />
              <span className="text-sm line-clamp-1">
                {movie.title}
              </span>
            </li>
          ))}

          {/* SEE ALL */}
          <li
            onClick={() => navigate(`/search/${query}`)}
            className="text-center py-2 text-sm bg-gray-800 hover:bg-gray-600 cursor-pointer"
          >
            See all movies
          </li>
        </ul>
      )}
    </div>
  )
}

export default SearchBar
