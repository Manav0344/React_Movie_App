import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchFromTMDB, imageURL } from "../api/tmbd";
import toast, { Toaster } from "react-hot-toast";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchFromTMDB(`movie/${id}`, {
        append_to_response: "videos",
      });
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
    <div className="max-w-6xl mx-auto mt-15 px-4">
      <Toaster position="top-right" />

     
      <button
        onClick={() => navigate("/")}
        className="mb-6 flex items-center gap-2 text-gray-300 hover:text-white transition border border-gray-600 px-4 py-2 rounded-md "
      >
        ← Back to Home
      </button>

      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={imageURL(movie.poster_path, "w342")}
          alt={movie.title}
          className="rounded-lg w-full"
        />

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
              className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
