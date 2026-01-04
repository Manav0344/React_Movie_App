# 🎬 React Movie App

A modern, responsive **Movie Streaming UI** built using **React + Vite + Tailwind CSS**, powered by the **TMDB API**.  
The app features trending movies, Bollywood & South Indian movies, movie details, search functionality, and a personal **My List** feature with local storage.

🔗 **Live Demo**:  
https://manav0344.github.io/React_Movie_App/

---

## 🚀 Features

### 🎞 Movie Browsing
- Trending Movies Slider (Auto-play every 8 seconds)
- Bollywood Movies (Hindi)
- South Indian Movies (Tamil, Telugu, Malayalam, Kannada)
- Category-based movie rows

### 🔍 Search
- Live movie search using TMDB API
- Search dropdown with movie results
- Dedicated search results page

### 📄 Movie Details Page
- Movie poster & backdrop
- Overview, rating, runtime, genres
- YouTube trailer (if available)
- Add to **My List**

### ❤️ My List
- Save favorite movies to **LocalStorage**
- Prevent duplicate movies
- Toast notifications for actions

### 📱 Responsive UI
- Fully mobile-friendly
- Hamburger menu for mobile
- Smooth hover animations

### 🔔 Notifications
- Beautiful toast notifications using **react-hot-toast**

---

## 🛠 Tech Stack

- React 19
- Vite
- React Router DOM (HashRouter)
- Tailwind CSS
- TMDB API
- LocalStorage
- react-hot-toast
- GitHub Pages

---

## 📂 Project Structure

src/
├── api/
│ └── tmbd.js
├── components/
│ ├── Navbar.jsx
│ ├── SearchBar.jsx
│ ├── Heroslider.jsx
│ ├── MoviesHeroslider.jsx
│ ├── CategoryRow.jsx
│ ├── MovieCard.jsx
│ └── Toast.jsx
├── pages/
│ ├── Home.jsx
│ ├── MovieDetails.jsx
│ ├── Movies.jsx
│ └── SearchResults.jsx
├── App.jsx
├── main.jsx
└── index.css



---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3



---

## ❓ Why HashRouter?

GitHub Pages does not support server-side routing.  
HashRouter ensures:
- No white screen on refresh
- Direct URL access works
- Smooth navigation

---



---

## 📌 Future Improvements

- User authentication
- Cloud-based watchlist
- Pagination in search
- TV Shows section
- Dark/Light theme toggle

---

## 🙌 Credits

- Movie data from The Movie Database (TMDB)
- UI inspired by modern streaming platforms

---

## 👨‍💻 Author

Manav Solanki  
GitHub: https://github.com/Manav0344  

---

⭐ If you like this project, give it a star on GitHub!
