"use strict";

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';

import Contacts from '../components/Contacts.js'
import MenuPages from '../pages/MenuPages'
import './Header.css'


class Header extends React.Component{
    static propTypes = {
        basket: PropTypes.object.isRequired // пришло из Redux для проверки есть ли что-то в корзине
                                            // в ответ ничего не передаем 
                                            // ключ productsInBasket
    };
    //    получим значение нужного счётчика
    // let counterValue=this.props.counters.cnts[this.props.counterid];
    // let counterValue=this.props.basket.productsInBasket;
    
    render(){
        let countProductsInBasket=Object.keys(this.props.basket.productsInBasket).length;
        return(
            <header className="Header">
                <div className="Info">
                    <div className="Logo">
                        <span>Plants</span>
                        <img src="/img/logo.png" className="ImgLogo"></img>
                    </div>
                    <Contacts />
                    <NavLink to="/basket">
                        <button type="button" className="ButtonToBasket">
                            <i className="fas fa-shopping-cart"></i>
                            <div className="CountProductsInBasket">
                            {countProductsInBasket}
                        </div>
                        </button>
                    </NavLink>
                </div>
                <div className="Navigation">
                    <MenuPages />
                </div>
            </header>

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
  
  export default connect(mapStateToProps)(Header);
  // экспортируем не этот класс CounterButton а уже обвернутый
