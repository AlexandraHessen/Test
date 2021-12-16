// ---------------- ActionCreator ----------------//
const ADD_ORDER = "ADD_ORDER"

//название action type

//функция для dispatch (из файла CounterButton) которая возвращает хэш с action type 
// называется ActionCreator

const add_order = function(customerPhone, objOrderInfo) {
// const add_product = function(productId, addValue) {
    return {
      type: ADD_ORDER,
      customerPhone: customerPhone,
      objOrderInfo: objOrderInfo
    };
  }

export {
    add_order, ADD_ORDER,
  }