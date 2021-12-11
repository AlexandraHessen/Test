import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import { ADD_PRODUCT, DEL_PRODUCT } from '../redux/basketAC';

import Basket from '../components/Basket'
import "./BasketPage.css"

class BasketPage extends React.Component{
    static propTypes = {
        basket: PropTypes.object.isRequired, // пришло из Redux для проверки есть ли что-то в корзине
                                            // в ответ ничего не передаем 
    }
    render(){
        //????????????? а сели другие ключи будут 
        let countProductsInBasket=Object.keys(this.props.basket).length;
        console.log(countProductsInBasket)
        console.log(this.props.basket)
        return(
            <div className="BasketPage">
                <h1>Корзина</h1>
                {(countProductsInBasket == 0) ? '<h4>Корзина пуста.</h4>' : <Basket />}
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
      // весь раздел Redux state под именем basket будет доступен
      // данному компоненту как this.props.basket
      basket: state.basket,
    };
  };
  
  export default connect(mapStateToProps)(BasketPage);
  // экспортируем не этот класс CounterButton а уже обвернутый
  