import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com?apikey=8c4efb6b";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    const initialTerm =
      searchTerm.length !== 0 ? searchTerm : new Date().getFullYear();
    searchMovies(initialTerm);
  }, [searchTerm]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchMovies(e.target.value);
    }
  };

  return (
    <div className="app">
      <nav className="bg-black-900 w-full text-blue-400 mb-4">
        <div className="max-w-9xl mx-auto px-4">
          <div className="flex justify-between space-x-4">
            <div>
              <a
                href="/"
                className="flex items-center py-3 px-2 text-gray-100 font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                  />
                </svg>
                <span>Movieland</span>
              </a>
            </div>
            <div className="flex items-center space-x-1">
              {/* navigation menu - will show on desktop version */}
              <div className="hidden md:block">
                <a href="/" className="py-5 px-3">
                  Home
                </a>
                <a href="/products" className="py-5 px-3">
                  Products
                </a>
                <a href="/services" className="py-5 px-3">
                  Services
                </a>
                <a
                  href="/signup"
                  className="py-2 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300 hover:text-yellow-800"
                >
                  Signup
                </a>
              </div>

              {/* Hamburger icon - will show on mobile version */}
              <div className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="main">
        <div className="flex justify-center">
          <h1>Movieland</h1>
        </div>

        <div className="flex justify-center">
          <div className="search flex justify-center w-95">
            <input
              className="w-95"
              placeholder="Search for movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
        </div>

        <div className="body">
          <div className="container">
            {movies?.length > 0 ? (
              <>
                {movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))}
              </>
            ) : (
              <div className="empty">
                <h2>No movie found</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
