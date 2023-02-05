import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Movies from "../../components/Movies/Movies";
import Favorites from "../../components/Favorites/Favorites";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [save, setSave] = useState(false);

  // getting movie list from api
  const getMovieRequest = async (searchValue) => {
    const url = `${process.env.REACT_APP_API_URL}?&apikey=${process.env.REACT_APP_API_KEY}&s=${searchValue}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      // console.log(responseJson);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem("react-movie-app-favorites")
    );
    setFavorites(movieFavorites ? movieFavorites : []);
    console.log(favorites, "favs useeffect");
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favorites", JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    let exits = false;

    favorites.map((item) => {
      if (item.imdbID === movie.imdbID) {
        exits = true;
      }
      return "";
    });

    if (!exits && !save) {
      const newFavoriteList = [...favorites, movie];
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
      console.log(favorites);
    }
  };

  const deleteFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const saveFavorites = () => {
    if (favorites.length === 0) {
      setSave(false);
    } else {
      setSave(true);
    }
  };

  return (
    <div className="main-page">
      <Header />
      <main className="main-page__content">
        <section className="main-page__main-section">
          <div className="main-page__search-box">
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className="main-page__movies">
            <Movies movies={movies} addFavoriteMovie={addFavoriteMovie} />
          </div>
        </section>
        <aside className="main-page__favorites">
          <Favorites
            movies={favorites}
            deleteFavoriteMovie={deleteFavoriteMovie}
            save={save}
            saveFavorites={saveFavorites}
          />
        </aside>
      </main>
    </div>
  );
};

export default MainPage;
