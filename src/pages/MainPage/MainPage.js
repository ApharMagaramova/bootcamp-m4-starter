import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Movies from "../../components/Movies/Movies";
import Favorites from "../../components/Favorites/Favorites";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?&apikey=1623c971&s=${searchValue}}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

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
            <Movies movies={movies} />
          </div>
        </section>
        <aside className="main-page__favorites">
          <Favorites />
        </aside>
      </main>
    </div>
  );
};

export default MainPage;
