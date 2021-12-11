// ---------------- ОПИСЫВАЕМ КАКИЕ У НАС БУДУТ REDUCERS И ОБЪЕДИНЯЕМ ИХ В ОДИН ----------------//
import { combineReducers } from 'redux';

import plantsReducer from "./plantsReducer";
import basketReducer from "./basketReducer";

let combinedReducer=combineReducers({
    plants: plantsReducer, // редьюсер plantsReducer отвечает за раздел state под именем plants
    basket: basketReducer
});

export default combinedReducer;
