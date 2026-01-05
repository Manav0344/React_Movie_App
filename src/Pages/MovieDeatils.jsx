import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchFromTMDB, imageURL } from "../api/tmbd";
import toast, { Toaster } from "react-hot-toast";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchFromTMDB(`movie/${id}`, {
        append_to_response: "videos",
      });

      setMovie(data);

      
      const trailer = data?.videos?.results?.find(
        (v) => v.site === "YouTube" && v.type === "Trailer"
      );

      setTrailerKey(trailer ? trailer.key : null);
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
    <div className="max-w-6xl mx-auto mt-5 px-4">
      <Toaster position="top-right" />

      
      <button
  onClick={() => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }}
  className="mb-6 bg-slate-700 text-gray-300 hover:text-white px-4 py-2 rounded-md"
>
  ← Back
</button>

      <div className="grid md:grid-cols-2 gap-10">
      
        <img
          src={imageURL(movie.poster_path, "w342")}
          alt={movie.title}
          className="rounded-lg w-full"
        />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>

          <p className="text-gray-400 mt-2">
            {movie.genres?.map((g) => g.name).join(" • ")} •{" "}
            {movie.release_date?.slice(0, 4)}
          </p>

          <p className="mt-4 text-gray-200">{movie.overview}</p>

          <div className="mt-6 flex gap-4">
            <span className="bg-gray-800 px-4 py-2 rounded-md">
              ⭐ {movie.vote_average}
            </span>
            <span className="bg-gray-800 px-4 py-2 rounded-md">
              ⏱ {movie.runtime ? movie.runtime + "m" : "N/A"}
            </span>
          </div>

          <div className="mt-6">
            <button
              onClick={() => addToMyList(movie)}
              className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
            >
              My List
            </button>
          </div>
        </div>
      </div>

     
      <div className="mt-20 mb-10">
        {trailerKey ? (
          <iframe
            title="Trailer"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            className="w-full h-[400px] rounded-lg"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-[400px] rounded-lg bg-black flex items-center justify-center">
            <div className="text-center text-gray-400">
              <p className="text-xl font-semibold">Trailer Not Available</p>
              <p className="text-sm mt-2">This movie does not have a YouTube trailer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
