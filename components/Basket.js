"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import RowProductBasket from './RowProductBasket '

class Basket extends React.PureComponent{

    static propTypes = {
        basket: PropTypes.object.isRequired // пришло из Redux для проверки есть ли что-то в корзине
                                            // в ответ ничего не передаем 
                                            // ключ productsInBasket
    };
    //    получим значение нужного счётчика
    // let counterValue=this.props.counters.cnts[this.props.counterid];
    // let counterValue=this.props.basket.productsInBasket;

    render(){
        console.log(this.props.basket.productsInBasket)
        let productsInBasketCode=[];
        //НУЖНО ДЕЛАТЬ МАССИВ
        for (let prod in this.props.basket.productsInBasket) {
    //         console.log(prod) //12 =ID
    //   console.log(this.state.cart.products)//obj из всех товаров
    //   console.log(this.state.cart.products[prod].id) //12
    //   console.log(this.state.cart.products[prod])//данные этого товара {id: 11, name: 'Морковь Вита Лонга', brand: 'Гавриш', category: 'Семена овощей', price: 0.65, …}
            productsInBasketCode.push(<RowProductBasket 
                key = {this.props.basket.productsInBasket[prod].id} 
                info = {this.props.basket.productsInBasket[prod]} />)
          };
        return(
            <table className = 'TableBasket'>
              <tbody>
                <tr>
                  <th>Товар</th>
                  <th></th>
                  <th className = "th_prodPrice">Цена</th>
                  <th className = "th_qty">Количество</th>
                  <th className = "th_sum">Итого</th>
                  <th></th>
                </tr>
                {productsInBasketCode}
              </tbody>
            </table>
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
  
  export default connect(mapStateToProps)(Basket);
  // экспортируем не этот класс CounterButton а уже обвернутый