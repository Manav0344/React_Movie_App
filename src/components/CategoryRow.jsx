import React, { useEffect, useState, useRef } from "react"
import MovieCard from "./MovieCard"
import { fetchFromTMDB } from "../api/tmbd"

export default function CategoryRow({
  title = "Trending Now",
  endpoint = "trending/movie/week",
  params = {},        
}) {
  const [items, setItems] = useState([])
  const scrollRef = useRef(null)

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchFromTMDB(endpoint, {
        language: "en-US",
        page: 1,
        ...params,       
      })

      setItems(data?.results || [])
    }

    fetchMovies()
  }, [endpoint, params])

  const scroll = (dir) => {
    if (!scrollRef.current) return
    const scrollAmount = window.innerWidth < 1024 ? 300 : 450
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="my-8 w-full">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-lg md:text-xl font-semibold">{title}</h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="bg-black/40 hover:bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full transition"
          >
            ⏪
          </button>

          <button
            onClick={() => scroll("right")}
            className="bg-black/40 hover:bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full transition"
          >
            ⏩
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-4 px-4 flex space-x-4 overflow-x-auto py-3 scrollbar-hide"
      >
        {items.map((movie) => (
          <div key={movie.id} className="flex-shrink-0">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  )
}
