export const  GET_FILMS = 'GET_FILMS';

export const getFilmsAC = (films) => {
    return {
        type: GET_FILMS,
        payload: films
    }
};

