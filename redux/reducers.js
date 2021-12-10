import { combineReducers } from 'redux';

import plantsReducer from "./plantsReducer";

let combinedReducer=combineReducers({
    plants: plantsReducer, // редьюсер plantsReducer отвечает за раздел state под именем plants
    // + другие редьюсеры
});

export default combinedReducer;
