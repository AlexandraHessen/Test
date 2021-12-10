"use strict";
import React from "react";
import { NavLink } from 'react-router-dom';

import "./MenuPages.css"

class MenuPages extends React.Component{
      // нельзя pure componenet
    render(){
        return(
            // <div className="MenuPages">
            <ul className="MenuPages">
                <li><NavLink to="/" exact className="PageLink" exact activeClassName="ActivePageLink">Главная</NavLink></li>
                <li><NavLink to="/catalog/1" className="PageLink" activeClassName="ActivePageLink">Каталог</NavLink></li>
                <li><NavLink to="/contacts" className="PageLink" activeClassName="ActivePageLink">Контакты</NavLink></li>
                <li><NavLink to="/basket" className="PageLink"activeClassName="ActivePageLink">Корзина</NavLink></li>
            </ul>
        )
    }

}

export default MenuPages;