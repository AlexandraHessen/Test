// ---------------- САМА ФУНКЦИЯ REDUСER  ----------------//
// REDUCER не делает запрос в Ajax, логика должна быть в компоненте
import { ADD_ORDER } from './orderAC'; //название action type


const initState={ // начальный state
    orders: []
    //КЛЮЧИ productId, objProductInfo
    // 1: {code: 1, name: 'Замиокулькас'}

//   status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
//   data: null, //даные которые мы загрузили по сети

}
//allInfoOrder-
// allInfoOrder.push( { objCustomerInfo: objCustomerInfo , products: this.props.basket.productsInBasket } );

function orderReducer(state=initState,action) {
  switch (action.type) {
    case ADD_ORDER: {
      console.log('action:',action);
      console.log(action.objCustomerInfo)
      console.log(action.objOrderInfo)
      console.log('state до обработки редьюсером:',state);
      let newState={...state}
      console.log(newState.orders)
      newState.orders.push( { objCustomerInfo: action.objCustomerInfo, products: action.objOrderInfo } );
      // let newState={...state, //старый state
      //   // { objCustomerInfo: objCustomerInfo , products: this.props.basket.productsInBasket }
      //   orders:{...state.orders, //заменить старые продукты на теже +
      //     // ПРИЛЕТИТ какой продукт (productid) изменить и насколько(addvalue)
      //     objCustomerInfo: action.objCustomerInfo, 
      //     products: action.objOrderInfo
          
      //     // [action.customerPhone]:action.objOrderInfo //+
      //     //[action.counterid] - В нужном продукте 
      //     // state.productsInBasket[action.productid] - его старое значение 
      //     // action.addvalue - изменить на прилетевшее
      //   }
      // };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    
      // console.log('state после обработки редьюсером:',newState);
      // return newState;
    }

    // case ADD_ORDER: {
    //   console.log('action:',action);
    //   console.log(action.objCustomerInfo)
    //   console.log(action.objOrderInfo)
    //   console.log('state до обработки редьюсером:',state);
    //   let newState={...state, //старый state
    //     orders:{...state.orders, //заменить старые продукты на теже +
    //       // ПРИЛЕТИТ какой продукт (productid) изменить и насколько(addvalue)
          
    //       [action.customerPhone]:action.objOrderInfo //+
    //       //[action.counterid] - В нужном продукте 
    //       // state.productsInBasket[action.productid] - его старое значение 
    //       // action.addvalue - изменить на прилетевшее
    //     }
    //   };
    //   console.log('state после обработки редьюсером:',newState);
    //   return newState;
    
    //   console.log('state после обработки редьюсером:',newState);
    //   return newState;
    // }


//обязатнльно пишем на тот случай если пришел action который не относится к этому reducery
    default:
      return state;
  }
}


export default orderReducer;