import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import MovieDeatils from './Pages/MovieDeatils';
import SearchResults from './components/SearchResults';
import TvShows from './Pages/TvShows';
import Movies from './Pages/Movies';
import MyList from './Pages/MyList';

function App() {
  return (
    <div className="min-h-screen bg-[#0b1c2d] text-white overflow-x-hidden overflow-y-auto">
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDeatils />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/my-list" element={<MyList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
