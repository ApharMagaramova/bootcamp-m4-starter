import React, { useState, useEffect } from "react";
import "./ListPage.css";

const ListPage = (props) => {
  const [movies, setMovies] = useState([]);

  const { state } = props.location;

  useEffect(() => {
    setMovies(state);
    console.log(state);
    // const id = this.props.match.params;
    // console.log(id);
    // TODO: request to the server to receive a list
    // TODO: requests to the server by all imdbIDs
  }, [state]);

  return (
    <div className="list-page">
      <h1 className="list-page__title">My List</h1>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.imdbID} className="movie-items">
              <a
                href={`https://www.imdb.com/title/${item.imdbID}/`}
                rel="noreferrer"
                target="_blank"
              >
                <article className="movie-item">
                  <img
                    className="movie-item__poster"
                    src={item.Poster}
                    alt={item.Title}
                  />
                  <div className="movie-item__info">
                    <h3 className="movie-item__title">
                      {item.Title}&nbsp;({item.Year})
                    </h3>
                  </div>
                </article>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPage;
