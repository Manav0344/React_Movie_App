import React from "react";
import MoviesHeroslider from "../components/MoviesHeroslider";
import CategoryRow from "../components/CategoryRow";

const Movies = () => {
  return (
    <div >
      <MoviesHeroslider />
      

     
      <div className="px-4 md:px-8 lg:px-16 py-6 space-y-12">
        <CategoryRow
        title="Bollywood Movies"
        endpoint="discover/movie?with_original_language=hi&sort_by=popularity.desc"
      />

      
      <CategoryRow
        title="South Indian Movies"
        endpoint="discover/movie?with_original_language=ta|te|ml|kn&sort_by=popularity.desc"
      />

      </div>
    </div>
  );
};

export default Movies;
