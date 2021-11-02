import axios from "axios";
import {getFilmsAC} from "../components/redux/actions";

export const getAllFilms = (searchQuery, page=1) => {
    return async dispatch => {
        const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8=${searchQuery}&${page}`);
        dispatch(getFilmsAC(response.data))
    }
};