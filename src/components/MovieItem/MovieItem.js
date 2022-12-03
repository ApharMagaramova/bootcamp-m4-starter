import React, { Component } from "react";
import "./MovieItem.css";

const MovieItem = (props) => {
  const { Title, Year, Poster, clicker } = props;

  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          type="button"
          className="movie-item__add-button"
          onClick={clicker}
        >
          Add to the list
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
