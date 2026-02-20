import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromTMDB } from "../api/tmbd";
import MovieCard from "./MovieCard";

const SearchResults = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const loadResults = async () => {
      try {
        setLoading(true);
        const data = await fetchFromTMDB("search/movie", { query });
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    loadResults();

    // Scroll to top when new search happens
    window.scrollTo(0, 0);

  }, [query]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-24">
      <h2 className="text-2xl font-semibold mb-6">
        Search results for "{query}"
      </h2>

      {movies.length === 0 ? (
        <p className="text-gray-400">No movies found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
