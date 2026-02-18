import React from 'react'
import { Link } from 'react-router-dom'
import { imageURL } from '../api/tmbd'

export default function MovieCard({ movie, onRemove }) {
  return (
    <div className="relative">
      
      <Link
        to={`/movie/${movie.id}`}
        className='block transform hover:scale-105 transition-transform w-[150px] md:w-[140px]'
      >
        <img
          src={imageURL(movie.poster_path, "w500")}
          alt={movie.title}
          className='w-full rounded-lg'
        />

        <div className='mt-2 text-sm'>
          <div className='font-medium line-clamp-1'>{movie.title}</div>
          <div className='text-gray-400 text-xs'>
            {(movie.release_date || movie.first_air_date || "").slice(0, 4)}
          </div>
        </div>
      </Link>

      {/* ✅ Show Remove button only if onRemove exists */}
      {onRemove && (
        <button
          onClick={() => onRemove(movie.id)}
          className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
        >
          Remove
        </button>
      )}

    </div>
  )
}
