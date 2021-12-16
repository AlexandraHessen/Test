// ---------------- ActionCreator ----------------//
const ADD_PRODUCT = "ADD_PRODUCT"
const DEL_PRODUCT = "DEL_PRODUCT"
const CLEAR_BASKET = "CLEAR_BASKET" //пользователь сам очищает корзину при желании
const CLEAR_PAGE = "CLEAR_PAGE" // очищается страница после оформления заказа

//название action type

//функция для dispatch (из файла CounterButton) которая возвращает хэш с action type 
// называется ActionCreator

const add_product = function(productId, objProductInfo) {
// const add_product = function(productId, addValue) {
    return {
      type: ADD_PRODUCT,
      productId: productId,
      objProductInfo: objProductInfo
    };
  }
  
  const del_product = function(productId) {
    return {
      type: DEL_PRODUCT,
      productId: productId,
    };
  }

  const clear_basket = function() {
    return {
      type: CLEAR_BASKET
    };
  }

  const clear_page = function() {
    return {
      type: CLEAR_PAGE
    };
  }

export {
    add_product, ADD_PRODUCT,
    del_product, DEL_PRODUCT,
    clear_basket, CLEAR_BASKET,
    clear_page, CLEAR_PAGE
  }