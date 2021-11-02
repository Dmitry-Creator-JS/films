import React from "react";
import './../../App.css'

const FilmsItem = ({film}) => {
  return <div className='item__container'>
    <div className="poster">
      <img src={film.Poster} alt="pic"/>
    </div>
    <div className="title">
      {film.Title}
    </div>
    <div className="year">
      {film.Year}
    </div>
    <div className="imdb">
      {film.imdbID}
    </div>
    <div className="type">
      {film.Type}
    </div>

  </div>;
};

export default FilmsItem;
