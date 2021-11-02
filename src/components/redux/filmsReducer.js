import {GET_FILMS} from "./actions";

let initialState = {
  films: [],
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_FILMS:
      return {
        ...state, films: [...state.films, action.payload]
      };


    default:
      return state;
  }
};

export default filmsReducer;
