import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllFilms} from "../../api/apiRequests";
import FilmsItem from "./FilmsItem";
import './../../App.css'

const Films = ({searchQuery}) => {
  const dispatch = useDispatch();
  const films = useSelector(state => state.filmsReducer.films);

  useEffect(() => {
      dispatch(getAllFilms(searchQuery))
  }, [] );
  console.log(films);
  return <div className='films'>
    {films.map(film => <FilmsItem key={film.id} film={film} />)}

  </div>;
};

export default Films;
