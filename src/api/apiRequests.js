import axios from "axios";
import {getFilmsAC} from "../components/redux/actions";

export const getAllFilms = () => {
    return async dispatch => {
        const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8`)
        dispatch(getFilmsAC(response.data))
    }
};