import React from 'react';
import CategoryRow from '../components/CategoryRow';

const TvShows = () => {
  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">
      <h1 className="text-3xl font-bold mb-6">TV Shows</h1>

      <CategoryRow title="Trending TV Shows" endpoint="trending/tv/week" />
      <CategoryRow title="Top Rated TV Shows" endpoint="tv/top_rated" />
      <CategoryRow title="Comedy TV Shows" endpoint="discover/tv" params={{ with_genres: 35 }} />
    </div>
  );
};

export default TvShows;
