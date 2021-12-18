"use strict";

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {clear_basket} from '../redux/basketAC';

import RowProductBasket from './RowProductBasket '
import Order from './Order';
import './Basket.css'

class Basket extends React.PureComponent{

    static propTypes = {
        basket: PropTypes.object.isRequired // пришло из Redux для проверки есть ли что-то в корзине
                                            // в ответ ничего не передаем 
                                            // ключ productsInBasket
    };
    //    получим значение нужного счётчика
    // let counterValue=this.props.counters.cnts[this.props.counterid];
    // let counterValue=this.props.basket.productsInBasket;
    state={
      checkout: false //нажата кнопка Оформить заказ
    }

    clearBasket=()=>{
      this.props.dispatch( clear_basket() )
    }

    checkout=()=>{
      this.setState({checkout: true})
    }

    render(){
        let sumProductsInBasket=0;
        let productsInBasketCode=[];
        //НУЖНО ДЕЛАТЬ МАССИВ

        for (let prod in this.props.basket.productsInBasket) {
    //  console.log(prod) //12 =ID
    //  console.log(this.state.cart.products)//obj из всех товаров
    //  console.log(this.props.basket.productsInBasket[prod].code) //12
    //  console.log(this.state.cart.products[prod])//данные этого товара {id: 11, name: 'Морковь Вита Лонга', brand: 'Гавриш', category: 'Семена овощей', price: 0.65, …}
            productsInBasketCode.push(<RowProductBasket 
                key = {this.props.basket.productsInBasket[prod].code} 
                info = {this.props.basket.productsInBasket[prod]} />)
                sumProductsInBasket+=this.props.basket.productsInBasket[prod].price
          };
          
        return(
          <div>
            <table className = 'TableBasket'>
              <tbody>
                <tr className = 'TableHeader'>
                  <th>Товар</th>
                  <th></th>
                  <th className='priceTh'>Цена</th>
                  {/* <th>Количество</th>
                  <th>Итого</th> */}
                  <th></th>
                </tr>
                {productsInBasketCode}
              </tbody>
            </table>
            <div className='Total'>
              Итого:  
              <div className='SumProductsInBasket'>{sumProductsInBasket} руб.</div>
            </div>
            <div className='ActionsBasket'>
              <input type="button" value="Очистить корзину" className="BasketButtons" onClick = {this.clearBasket}></input>
              <input type="button" value="Оформить заказ" className="BasketButtons" onClick = {this.checkout}></input>
            </div>
            {this.state.checkout && <Order />}
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
  
  export default connect(mapStateToProps)(Basket);
  // экспортируем не этот класс CounterButton а уже обвернутый