import { PLANTS_LOADING, PLANTS_ERROR, PLANTS_SET } from './plantsAC';

const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  data: null,

}

function plantsReducer(state=initState,action) {
  switch (action.type) {

    case PLANTS_LOADING: {
      let newState={
        status:1,
        data:null,
      };
      return newState;
    }

    case PLANTS_ERROR: {
      let newState={
        status:2,
        data:null,
      };
      return newState;
    }

    case PLANTS_SET: {
      let newState={
        status:3,
        data:action.plants,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default plantsReducer;
