import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const MyList = () => {
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("myList")) || [];
    setMyMovies(savedMovies);
  }, []);

  // ✅ REMOVE FUNCTION
  const handleRemove = (id) => {
    const updatedMovies = myMovies.filter(movie => movie.id !== id);

    setMyMovies(updatedMovies); // Update UI
    localStorage.setItem("myList", JSON.stringify(updatedMovies)); // Update storage
  };

  if (!myMovies.length) {
    return (
      <div className="max-w-6xl mx-auto mt-24 px-4 text-center text-gray-400">
        <h2 className="text-2xl font-bold mb-4">My List is Empty</h2>
        <p>Add some movies by clicking "My List" in the slider or category rows!</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">
      <h2 className="text-3xl font-bold mb-6">My List Movies</h2>
      <div className="flex flex-wrap gap-4">
        {myMovies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onRemove={handleRemove} // ✅ pass remove function
          />
        ))}
      </div>
    </div>
  );
};

export default MyList;
