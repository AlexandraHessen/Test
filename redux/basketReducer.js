// ---------------- САМА ФУНКЦИЯ REDUСER  ----------------//
// REDUCER не делает запрос в Ajax, логика должна быть в компоненте
import { ADD_PRODUCT, DEL_PRODUCT, CLEAR_BASKET} from './basketAC'; //название action type


const initState={ // начальный state
    productsInBasket: {},
    // name: "Plants"
    //КЛЮЧИ productId, objProductInfo
    // 1: {code: 1, name: 'Замиокулькас'}

//   status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
//   data: null, //даные которые мы загрузили по сети

}

//--------------------------- НЕЛЬЗЯ LOCAL ST В REDUCER ---------------------------
function basketReducer(state=initState,action) {
  switch (action.type) {

    case ADD_PRODUCT: {
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
    //   let infoLocStorage={};
    //   let previousInfoLocStorage=JSON.parse(localStorage.getItem(state.name));
    //   if(previousInfoLocStorage){
    //     infoLocStorage=previousInfoLocStorage
    // } 
    // infoLocStorage[action.productId]=action.objProductInfo;
    // localStorage.setItem(state.name, JSON.stringify(infoLocStorage))
      let newState={...state, //старый state
        productsInBasket:{...state.productsInBasket, //заменить старые продукты на теже +
          // ПРИЛЕТИТ какой продукт (productid) изменить и насколько(addvalue)
          [action.productId]:action.objProductInfo //+
          //[action.counterid] - В нужном продукте 
          // state.productsInBasket[action.productid] - его старое значение 
          // action.addvalue - изменить на прилетевшее
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    case DEL_PRODUCT: {
      // let infoLocStorage=JSON.parse(localStorage.getItem(state.name));
      // delete infoLocStorage[action.productId]
      // localStorage.setItem(state.name, JSON.stringify(infoLocStorage))
      let newState = {...state};
      delete newState.productsInBasket[action.productId];
      return newState;
    }

    case CLEAR_BASKET:{
      // localStorage.removeItem( state.name);
      let newState = {...state};
      newState.productsInBasket={};
      return newState;
    }

    // case GET_LOCAL_STORAGE:

    // case SET_LOCAL_STORAGE: {
    //   let infoLocStorage={};
    //   let previousInfoLocStorage=JSON.parse(localStorage.getItem(state.name));
    //   if(previousInfoLocStorage){
    //     infoLocStorage=previousInfoLocStorage
    // } 
    // infoLocStorage[productId]=objProductInfo;
    // localStorage.setItem(state.name, JSON.stringify(infoLocStorage))
    //   if(!localStorage.getItem(state.name)){
    //     localStorage.setItem(state.name, "{}")
    //   }
    //   console.log('action:',action);
    //   console.log('state до обработки редьюсером:',state);
    //   let newState={...state, //старый state
    //     productsInBasket:{...state.productsInBasket, //заменить старые продукты на теже +
    //       // ПРИЛЕТИТ какой продукт (productid) изменить и насколько(addvalue)
    //       [action.productId]:action.objProductInfo //+
    //       //[action.counterid] - В нужном продукте 
    //       // state.productsInBasket[action.productid] - его старое значение 
    //       // action.addvalue - изменить на прилетевшее
    //     }
    //   };
    //   console.log('state после обработки редьюсером:',newState);
    //   return newState;
    // }

    // case PLANTS_ERROR: {
    //   let newState={
    //     status:2,
    //     data:null,
    //   };
    //   return newState;
    // }

    // case PLANTS_SET: {
    //   let newState={
    //     status:3,
    //     data:action.plants, //загруженные данные
    //   };
    //   return newState;
    // }
    
//обязатнльно пишем на тот случай если пришел action который не относится к этому reducery
    default:
      return state;
  }
}

export default basketReducer;
