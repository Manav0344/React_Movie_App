import React, { useEffect, useState } from "react";
import { fetchFromTMDB, imageURL } from "../api/tmbd";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"; // import react-hot-toast

const Heroslider = () => {
  const [items, setItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetchFromTMDB("trending/movie/week");
      setItems(data.results.slice(0, 5));
    })();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [items]);

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

  return (
    <div className="relative h-[80vh] overflow-hidden rounded-b-lg">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      {items.map((item, i) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === currentSlide ? "opacity-100 z-10" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(6,6,7,0.7), rgba(6,6,7,0.2)), url(${imageURL(
              item.backdrop_path,
              "w780"
            )})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-6xl mx-auto h-full flex items-center px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">{item.title}</h2>
              <p className="mt-4 line-clamp-3">{item.overview}</p>
              <div className="mt-6 flex gap-3">
                <Link
                  to={`/movie/${item.id}`}
                  className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
                >
                  Play
                </Link>
                <button
                  onClick={() => addToMyList(item)}
                  className="bg-gray-700 px-4 py-2 rounded-md font-semibold transition hover:bg-gray-600"
                >
                  My List
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Heroslider;
