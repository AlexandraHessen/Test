"use strict";

import React, { Fragment } from 'react';

import Contacts from '../components/Contacts.js'
import MenuPages from '../pages/MenuPages'
import './Header.css'


class Header extends React.Component{
    render(){
        return(
            <header className="Header">
                <div className="Info">
                    <div className="Logo">
                        <span>Plants</span>
                        <img src="/img/logo.png" className="ImgLogo"></img>
                    </div>
                    <Contacts />
                </div>
                <div className="Navigation">
                    <MenuPages />
                </div>
            </header>

        )
    }
}

export default Header;