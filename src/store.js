import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import filmsReducer from "./components/redux/filmsReducer";


let rootReducer = combineReducers({
 filmsReducer
});


 let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
