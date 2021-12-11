// ---------------- ActionCreator ----------------//
const ADD_PRODUCT = "ADD_PRODUCT"
const DEL_PRODUCT = "DEL_PRODUCT"
//название action type

//функция для dispatch (из файла CounterButton) которая возвращает хэш с action type 
// называется ActionCreator

const add_product = function(productId, addValue) {
    return {
      type: ADD_PRODUCT,
      productId: productId,
      addValue: addValue,
    };
  }
  
  const del_product = function(productId) {
    return {
      type: DEL_PRODUCT,
      productId: productId,
    };
  }
export {
    add_product, ADD_PRODUCT,
    del_product, DEL_PRODUCT,
  }