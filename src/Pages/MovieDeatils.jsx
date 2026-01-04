import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import { fetchFromTMDB, imageURL } from "../api/tmbd";
import toast, { Toaster } from "react-hot-toast"; // <-- import toast

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchFromTMDB(`movie/${id}`, { append_to_response: "videos" });
      setMovie(data);
    })();
  }, [id]);

  const addToMyList = (movie) => {
    const existing = JSON.parse(localStorage.getItem("myList")) || [];
    if (existing.find((m) => m.id === movie.id)) {
      toast.error(`${movie.title} is already in your list`);
      return;
    }
    existing.push(movie);
    localStorage.setItem("myList", JSON.stringify(existing));
    toast.success(`${movie.title} added to My List`);
  };

  if (!movie) return <div className="mt-24 text-center">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Poster */}
        <div>
          <img
            src={imageURL(movie.poster_path, "w342")}
            alt={movie.title}
            className="rounded-lg w-full"
          />
        </div>

        {/* Movie Info */}
        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>

          <p className="text-gray-400 mt-2">
            {movie.genres?.map((g) => g.name).join(" • ")} •{" "}
            {movie.release_date?.slice(0, 4)}
          </p>

          <p className="mt-4 text-gray-200 leading-relaxed">{movie.overview}</p>

          <div className="mt-6 flex gap-4">
            <span className="bg-gray-800 px-4 py-2 rounded-md">⭐ {movie.vote_average}</span>
            <span className="bg-gray-800 px-4 py-2 rounded-md">⏱ {movie.runtime ? movie.runtime + "m" : "N/A"}</span>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => addToMyList(movie)}
              className="bg-gray-700 px-4 py-2 rounded-md font-semibold transition hover:bg-gray-600"
            >
              My List
            </button>
          </div>

          {/* Trailer */}
          <div className="mt-8 w-full">
            {movie.videos?.results?.length > 0 ? (
              <iframe
                title="Trailer"
                src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                className="w-full h-[400px] rounded-lg"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="text-center text-gray-400 py-20 bg-gray-800 rounded-lg">
                No trailer available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
